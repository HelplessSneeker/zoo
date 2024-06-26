import { Sex } from "@prisma/client";
import prisma from "../config/prismaClient";

export class AnimalModel {
  async createAnimal(name: string, species: string, age: number, sex: Sex) {
    return await prisma.animal.create({
      data: {
        name,
        age,
        sex,
        species,
      },
    });
  }

  async getAnimals() {
    return await prisma.animal.findMany();
  }

  async editAnimal(
    id: string,
    name: string,
    species: string,
    age: number,
    sex: Sex,
  ) {
    return await prisma.animal.update({
      where: {
        id,
      },
      data: {
        name,
        species,
        age,
        sex,
      },
    });
  }

  async getAvailableAnimals() {
    return await prisma.animal.findMany({
      where: {
        enclosureId: null,
      },
    });
  }
}
