import express from "express";
import animalController from "../controllers/animal.controller.js";

const router = express.Router();

router.get("/:id", animalController.getAnimal);
router.get("/", animalController.getAnimais);

export default router;
