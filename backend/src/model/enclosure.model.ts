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
    return await prisma.enclosure.findMany();
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
}
