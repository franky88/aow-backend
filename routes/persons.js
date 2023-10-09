import express from 'express';
const router = express.Router();
import Person from '../models/persons.js';
import { getPerson } from '../controllers/personController.js';


router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        res.json(persons);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

router.get('/:id', getPerson, (req, res) => {
    res.status(200).json({person: res.person});
});

router.post('/', async (req, res) => {
    const {name, education, gender, experience, about_me} = req.body;
    const personExists = await Person.findOne({name});

    if (personExists) {
        res.status(400);
        throw new Error('Applicant already exists');
    }
    const person = await Person.create({name: name, education: education, gender: gender, experience: experience, about_me: about_me});

    if (person) {
        res.status(201).json({person: person})
    }
});

router.patch('/:id', getPerson, async (req, res) => {
    if (req.body != null) {
        if (req.body.name) {
            res.person.name = req.body.name;
        }
        if (req.body.education) {
            res.person.education = req.body.education;
        }
        if (req.body.gender) {
            res.person.gender = req.body.gender;
        }
        if (req.body.experience) {
            res.person.experience = req.body.experience;
        }
        if (req.body.about_me) {
            res.person.about_me = req.body.about_me;
        }

        try {
            const personExists = await Person.findOne({name: req.body.name});

            if (personExists) {
                res.status(400);
                throw new Error('Applicant already exists');
            } else {
                const updatedPerson = await res.person.save();
                res.status(200).json({ message: "Applicant successfully updated", person: updatedPerson });
            }
        } catch (err) {
            res.status(500).json({ message: "Error updating the person", error: err.message });
        }
    } else {
        res.status(400).json({ message: "Invalid request body" });
    }
});

router.delete('/:id', getPerson, async (req, res) => {
    try {
        res.person.remove();
        res.status(200).json({ message: "Person removed", person: res.person})
    } catch (err) {
        res.status(404);
        throw new Error("Applicant not found")
    }
});

export default router;