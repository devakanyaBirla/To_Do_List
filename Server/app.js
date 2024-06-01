import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import TaskRouter from "./Router/taskList.route.js";

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(cors());

        app.use("/TaskList", TaskRouter);
        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });

    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


