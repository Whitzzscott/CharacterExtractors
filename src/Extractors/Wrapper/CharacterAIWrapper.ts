import axios from "axios";
import { CharacterData } from "../Types/CharacterAiTypes";

const API_URL = "https://plus.character.ai/chat/character/info/";

export class CharacterAIWrapper {
    private apiToken: string;

    constructor(apiToken: string) {
        this.apiToken = apiToken;
    }

    public async scrapeCharacter(url: string): Promise<CharacterData> {
        try {
            if (!url) {
                throw new Error("Missing URL parameter");
            }

            console.log(`Extracting external ID from URL: ${url}`);
            const match = url.match(/character\.ai\/(?:chat|chat2|characters)\/([\w-]+)/);
            if (!match) {
                throw new Error("Invalid Character AI URL format");
            }

            const externalId = match[1];
            console.log(`Extracted external ID: ${externalId}`);

            const headers = {
                Authorization: `Token ${this.apiToken}`,
                "Content-Type": "application/json",
            };

            console.log(`Fetching character data from Character AI API...`);
            const response = await axios.post(API_URL, { external_id: externalId }, { headers });

            if (response.status === 200) {
                const characterInfo = response.data.character;
                if (!characterInfo) {
                    throw new Error("Character not found");
                }

                return {
                    title: characterInfo.title || "Unknown",
                    name: characterInfo.name || "Unknown",
                    greeting: characterInfo.greeting || "No greeting available",
                    description: characterInfo.description || "No description available",
                    avatar: characterInfo.avatar_file_name || "",
                    updated: characterInfo.updated || new Date().toISOString(),
                    created_by: "Better Sakura",
                    response_time: new Date().toISOString(),
                };
            } else {
                throw new Error(`API returned status ${response.status}`);
            }
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
            console.error("Error:", errorMessage);
            throw new Error(errorMessage);
        }
    }
}
