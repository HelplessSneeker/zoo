import { Router, Request, Response } from "express";
import { AnimalController } from "../controllers/animal.controller";

const router = Router();
const animalController = new AnimalController();

router.get("/", animalController.getAnimals);
router.post("/", animalController.createAnimal);
router.post("/edit", animalController.editAnimal);

export default router;
