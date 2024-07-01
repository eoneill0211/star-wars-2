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


// Begin 
app.get('/api/films/:id/characters', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("films_characters");
        const info = await collection.find({film_id: Number(id)}).toArray();
        
        var dict = []; // Create an empty array

        for (let i = 0; i < info.length; i++) {
            
            var character_name = await db.collection("characters").find({id: Number(info[i].character_id)}).toArray();

            dict.push(character_name[0]);
          }
        res.json(dict);


    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error :( ");
    }
});
app.get('/api/films/:id/planets', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("films_planets");
        const info = await collection.find({film_id: Number(id)}).toArray();

        var dict = [];
        for (let i = 0; i < info.length; i++) {
            
            var character_name = await db.collection("planets").find({id: Number(info[i].planet_id)}).toArray();


            dict.push(character_name[0]);
          }

        res.json(dict);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error :( ");
    }
});
app.get('/api/characters/:id/films', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("films_characters");
        const info = await collection.find({character_id: Number(id)}).toArray();

        var dict = [];
        for (let i = 0; i < info.length; i++) {
            
            var character_name = await db.collection("films").find({id: Number(info[i].film_id)}).toArray();


            dict.push(character_name[0]);
          }

        res.json(dict);

    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error :( ");
    }
});
// app.get('/api/characters/:id/planets', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const client = await MongoClient.connect(url);
//         const db = client.db(dbName);
//         const collection = db.collection("characters");
//         const info = await collection.find({id: Number(id)}).toArray();
//         res.json(info);
//     } catch (err) {
//         console.error("Error:", err);
//         res.status(500).send("Error :( ");
//     }
// });
// app.get('/api/planets/:id/characters', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const client = await MongoClient.connect(url);
//         const db = client.db(dbName);
//         const collection = db.collection("planets");
//         const info = await collection.find({id: Number(id)}).toArray();
//         res.json(info);
//     } catch (err) {
//         console.error("Error:", err);
//         res.status(500).send("Error :( ");
//     }
// });
app.get('/api/planets/:id/films', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("films_planets");
        const info = await collection.find({film_id: Number(id)}).toArray();

        var dict = [];
        for (let i = 0; i < info.length; i++) {
            
            var character_name = await db.collection("films").find({id: Number(info[i].film_id)}).toArray();


            dict.push(character_name[0]);
          }

        res.json(dict);
        
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error :( ");
    }
});
app.get('/api/films/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("films");
        const info = await collection.find({id: Number(id)}).toArray();
        res.json(info);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error :( ");
    }
});
app.get('/api/planets/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("planets");
        const info = await collection.find({id: Number(id)}).toArray();
        res.json(info);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error :( ");
    }
});
app.get('/api/characters/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("characters");
        const info = await collection.find({id: Number(id)}).toArray();
        res.json(info);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error :( ");
    }
});
app.get('/api/characters', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("characters");
        const info = await collection.find({}).toArray();
        res.json(info);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error :( ");
    }
});
app.get('/api/films', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("films");
        const info = await collection.find({}).toArray();
        res.json(info);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error :( ");
    }
});
app.get('/api/planets', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("planets");
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