import express from 'express';
import { promises as fs } from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
 
dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
//const collectionName = process.env.MONGO_DB_COLLECTION;
 
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;

// Endpoint to read and send JSON file content
// Endpoint to read and send JSON file content
app.get('/api/:collectionName', async (req, res) => {
    try {
        const { collectionName } = req.params;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const info = await collection.find({}).toArray();
        res.json(info);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error :( ");
    }
});
 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});