import { AnimalModel } from "../model/animal.model";
import { Request, Response } from "express";

const animalModel = new AnimalModel();

export class AnimalController {
  async createAnimal(req: Request, res: Response) {
    const { name, species, age, sex } = req.body;
    const animal = await animalModel.createAnimal(name, species, age, sex);
    res.json(animal.id);
  }

  async getAnimals(req: Request, res: Response) {
    const animals = await animalModel.getAnimals();
    res.json(animals);
  }

  async editAnimal(req: Request, res: Response) {
    const { id, name, species, age, sex } = req.body;
    const animal = await animalModel.editAnimal(id, name, species, age, sex);
    res.json(animal.id);
  }
}
