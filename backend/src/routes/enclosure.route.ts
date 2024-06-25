import { Router, Request, Response } from "express";
import { EnclosureController } from "../controllers/enclosure.controller";

const router = Router();
const enclosureController = new EnclosureController();

router.get("/", enclosureController.getEnclosures);
router.post("/", enclosureController.createEnclosure);
router.post("/edit", enclosureController.editEnclosure);

export default router;
