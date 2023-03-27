import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";
// controllers
import { create } from "../controllers/hotel";

router.post("/create-hotel", requireSignin, formidable(), create);

module.exports = router;
