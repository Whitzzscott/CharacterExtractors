import { FlowGPTAPI } from "../Api/FlowGPTAPI";
import { FlowGPTData } from "../Types/FlowGPTTypes"

export class FlowGPTWrapper {
    public static async getCharacterData(url: string): Promise<FlowGPTData> {
        try {
            if (!url) {
                throw new Error("Missing URL parameter");
            }

            console.log(`Extracting Character ID from: ${url}`);
            const match = url.match(/flowgpt\.com\/chat\/([\w-]+)/);
            if (!match) {
                throw new Error("Invalid FlowGPT URL format");
            }

            const characterId = match[1];
            return await FlowGPTAPI.fetchData(characterId);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
            console.error("Error:", errorMessage);
            throw new Error(errorMessage);
        }
    }
}
