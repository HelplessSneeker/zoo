import { Router, Request, Response } from "express";
import { EnclosureController } from "../controllers/enclosure.controller";

const router = Router();
const enclosureController = new EnclosureController();

router.get("/", enclosureController.getEnclosures);
router.post("/", enclosureController.createEnclosure);
router.post("/edit", enclosureController.editEnclosure);
router.post("/add", enclosureController.addAnimalToEnclosure);
router.post("/remove", enclosureController.removeAnimalFromEnclosure);

export default router;
