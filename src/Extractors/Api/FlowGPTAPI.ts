import axios from "axios";
import { FlowGPTData } from "../Types/FlowGPTTypes"

export class FlowGPTAPI {
    private static readonly BASE_URL = "https://prod-backend-k8s.flowgpt.com/prompt/";

    public static async fetchData(characterId: string): Promise<FlowGPTData> {
        try {
            if (!characterId) {
                throw new Error("Missing Character ID");
            }

            const apiUrl = `${this.BASE_URL}${characterId}/`;
            console.log(`Fetching data from API: ${apiUrl}`);

            const response = await axios.get(apiUrl);
            if (response.status !== 200 || !response.data.prompt) {
                throw new Error(`Invalid API response: ${response.statusText}`);
            }

            const data = response.data.prompt;
            return {
                title: data.title || "Unknown",
                language: data.language || "Unknown",
                description: data.description || "No description available",
                coverURL: data.coverURL || "",
                thumbnailURL: data.thumbnailURL || "",
                type: data.type || "Unknown",
                nsfw: data.nsfw || false,
                exampleConversation: data.exampleConversation || [],
                tags: data.promptTags ? data.promptTags.map((tag: any) => tag[3]) : [],
            };
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
            console.error("Error:", errorMessage);
            throw new Error(errorMessage);
        }
    }
}
