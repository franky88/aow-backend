import asyncHandler from "express-async-handler";
import Person from "../models/persons.js";

const authUser = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error('Something went wrong')

  res.status(200).json({ message: "Auth user" });
});

async function getPerson(req, res, next) {
  let person;
  try {
    person = await Person.findById(req.params.id);
    if (person == null) {
      return res.status(404).json({ message: "Cannot find the person" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.person = person;
  next();
}

export { authUser, getPerson };
