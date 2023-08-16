import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import uri from "./atlas_uri.js";
import mongoose from "mongoose";
import Student from "./student.js";

dotenv.config()

mongoose.connect(uri);


const setJohn = async () => {
    try {
        const student = await Student.create({ name: "John", lastName: "Doe", email: "john@doe.com" })

        console.log(student)

    } catch (error) {
        console.log(error.message)
    }
}


//connection without mongoose: 
// console.log(uri);

// const client = new MongoClient(uri);

// const dbname = "test"

// const dbConnection = async () => {
//     try {
//         await client.connect();
//         console.log(`connected to the ${dbname} database`)
//     } catch (error) {
//         console.error(`Error while connecting to database: ${error}`)
//     }
// }

// const main = async () => {
//     try {
//         await dbConnection();
//     } catch (error) {
//         console.error(`Connectionerror: ${error}`);
//     } finally {
//         await client.close();
//     }
// }

//main()

const app = express();
const port = process.env.PORT || 3004

app.listen(port, () => console.log(`Server is running on port: ${port}`));

app.post("/", (req, res, next) => {
    setJohn()
})

app.get("/", async (req, res, next) => {
    try {
        const result = await Student.find();
        res.send(result);

    } catch (error) {
        console.log(error.message)
    }
})

app.put("/", async (req, res, next) => {
    try {
        await Student.updateMany({ name: "John" }, { $set: { name: "Bob" } })
        console.log("Bob it is!");
    } catch (error) {
        console.log(error.message)
    }
})