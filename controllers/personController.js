import asyncHandler from 'express-async-handler';
import Person from '../models/persons.js';

const authUser = asyncHandler( async (req, res) => {
    // res.status(401);
    // throw new Error('Something went wrong')

    res.status(200).json({message: 'Auth user'})
})

const getPerson = asyncHandler( async (req, res, next) => {
    let person
    person = await Person.findById(req.params.id)

    if (person === null) {
        res.status(404).json({message: 'Cannot find person'});
    }

    res.person = person;
    next();
})


export {
    authUser,
    getPerson
}