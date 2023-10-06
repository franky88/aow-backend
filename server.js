const express = require('express');
const db = require('./database');
const app = express();

app.get('/', (req, res) => {
    console.log(db);
    res.status(200).json({message:"App is running!"})
});

app.use(express.json());

const personDetails = require('./routes/persons');
app.use("/persons", personDetails)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
