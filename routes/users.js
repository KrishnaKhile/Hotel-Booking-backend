import express from "express";
import multer from "multer";
import {
  changePassword,
  deleteUsers,
  getAllUsers,
  getUsers,
  updateUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// store profile image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img");
  },
  filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// UPDATE
router.put("/:id", upload.single("avatar"), updateUsers);
// CHANGE PASSWORD
router.put("/changepass/:id",verifyUser, changePassword);
// DELETE
router.delete("/:id", verifyUser, deleteUsers);
// GET
router.get("/:id", verifyUser, getUsers);
// GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;
