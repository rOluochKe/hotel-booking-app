import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// middleware
import { requireSignin, hotelOwner } from "../middlewares";
// controllers
import {
  create,
  hotels,
  image,
  sellerHotels,
  remove,
  read,
} from "../controllers/hotel";

router.post("/create-hotel", requireSignin, formidable(), create);
router.get("/hotels", hotels);
router.get("/hotel/image/:hotelId", image);
router.get("/seller-hotels", requireSignin, sellerHotels);
router.delete("/delete-hotel/:hotelId", requireSignin, hotelOwner, remove);
router.get("/hotel/:hotelId", read);

module.exports = router;
