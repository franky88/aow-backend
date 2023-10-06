const express = require('express');
const router = express.Router();
const Person = require('../models/persons');

router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        res.json(persons);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

router.get('/:id', (req, res) => {
    res.status(200).json({person: req.params.id})
});

router.post('/', async (req, res) => {
    const person = new Person({
        name: req.body.name,
        education: req.body.education,
        gender: req.body.gender,
        experience: req.body.experience,
        about_me: req.body.about_me
    })
    try {
        const newPerson = await person.save()
        res.status(200).json({person: newPerson})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
    res.status(201).json({message: "Person created successfully"})
});

router.patch('/:id', (req, res) => {
    res.status(200).json({message: "Hello from persons route"})
});

router.delete('/:id', (req, res) => {
    res.status(200).json({message: "Hello from persons route"})
});

module.exports = router;