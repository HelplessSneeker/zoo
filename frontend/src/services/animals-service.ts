import { API_BASE_URL } from "../constants";

export class AnimalsService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async getAllAnimals(): Promise<any> {
    const response = await fetch(`${this.baseUrl}/animals`);
    if (!response.ok) {
      throw new Error("Failed to fetch animals");
    }
    return response.json();
  }

  async createAnimal(newAnimalData: any): Promise<any> {
    const response = await fetch(`${this.baseUrl}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAnimalData),
    });

    if (!response.ok) {
      throw new Error("Failed to create animal");
    }

    return response.json();
  }

  async editAnimal(oldAnimalData: any): Promise<any> {
    const response = await fetch(`${this.baseUrl}/animals/edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(oldAnimalData),
    });

    if (!response.ok) {
      throw new Error("Failed to create animal");
    }

    return response.json();
  }
}
