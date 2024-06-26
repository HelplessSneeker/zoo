import { EnclosureModel } from "../model/enclosure.model";
import { Request, Response } from "express";

const enclosureModel = new EnclosureModel();

export class EnclosureController {
  async createEnclosure(req: Request, res: Response) {
    const { name, place, size } = req.body;
    const enclosure = await enclosureModel.createEnclosure(name, place, size);
    res.json(enclosure.id);
  }

  async getEnclosures(req: Request, res: Response) {
    const enclosures = await enclosureModel.getEnclosures();
    res.json(enclosures);
  }

  async editEnclosure(req: Request, res: Response) {
    const { id, name, place, size } = req.body;
    const enclosure = await enclosureModel.editEnclosure(id, name, place, size);
    res.json(enclosure.id);
  }

  async addAnimalToEnclosure(req: Request, res: Response) {
    const { enclosureId, animalId } = req.body;
    const enclosure = await enclosureModel.addAnimalToEnclosure(
      enclosureId,
      animalId,
    );
    res.json(enclosure.id);
  }

  async removeAnimalFromEnclosure(req: Request, res: Response) {
    const { enclosureId, animalId } = req.body;
    const enclosure = await enclosureModel.removeAnimalFromEnclosure(
      enclosureId,
      animalId,
    );
    res.json(enclosure.id);
  }
}
