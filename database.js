// require('dotenv').config();
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://frank:9NJvlii95VNL8GOM@cluster0.lhwpogy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
const mongoose = require('mongoose');
const uri = "mongodb+srv://frank:9NJvlii95VNL8GOM@cluster0.lhwpogy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
