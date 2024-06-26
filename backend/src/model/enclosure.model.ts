import prisma from "../config/prismaClient";

export class EnclosureModel {
  async createEnclosure(name: string, place: string, size: number) {
    return await prisma.enclosure.create({
      data: {
        name,
        place,
        size,
      },
    });
  }

  async getEnclosures() {
    return await prisma.enclosure.findMany({
      include: {
        animals: true,
      },
    });
  }

  async editEnclosure(id: string, name: string, place: string, size: number) {
    return await prisma.enclosure.update({
      where: {
        id,
      },
      data: {
        name,
        place,
        size,
      },
    });
  }

  async addAnimalToEnclosure(enclosureId: string, animalId: string) {
    return await prisma.enclosure.update({
      where: {
        id: enclosureId,
      },
      data: {
        animals: {
          connect: {
            id: animalId,
          },
        },
      },
    });
  }

  async removeAnimalFromEnclosure(enclosureId: string, animalId: string) {
    return await prisma.enclosure.update({
      where: {
        id: enclosureId,
      },
      data: {
        animals: {
          disconnect: {
            id: animalId,
          },
        },
      },
    });
  }
}
