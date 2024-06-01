import express from "express";
import { Add, saveInBulk, getAllTask, updateStatus } from "../controller/taskList.controller.js";
// import {body} from "express-validator";


const router = express.Router();

router.post("/addTask", Add);
router.post("/addInBulk", saveInBulk);
router.get("/getAllTask", getAllTask);
router.put("/updateStatus", updateStatus);

export default router;