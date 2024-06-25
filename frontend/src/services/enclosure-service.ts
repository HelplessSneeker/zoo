import { API_BASE_URL } from "../constants";

export class EnclosuresService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async getAllEnclosures(): Promise<any> {
    const response = await fetch(`${this.baseUrl}/enclosures`);
    if (!response.ok) {
      throw new Error("Failed to fetch enclosures");
    }
    return response.json();
  }

  async createEnclosure(newEnclosureData: any): Promise<any> {
    const response = await fetch(`${this.baseUrl}/enclosures`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEnclosureData),
    });

    if (!response.ok) {
      throw new Error("Failed to create enclosure");
    }

    return response.json();
  }

  async editEnclosure(oldEnclosureData: any): Promise<any> {
    const response = await fetch(`${this.baseUrl}/enclosures/edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(oldEnclosureData),
    });

    if (!response.ok) {
      throw new Error("Failed to create enclosure");
    }

    return response.json();
  }
}
