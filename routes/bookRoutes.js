import express from "express";
import {
  addBook,
  updateBook,
  deleteBook,
  getBooks,
  getBookById,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/addbooks", addBook);
router.get("/getbooks", getBooks);    // GET ALL
router.get("/getbook", getBookById);   
router.put("/update", updateBook);// ?id=69e201dfd8a25f4912ebf629
router.delete("/deletebook", deleteBook);

export default router;