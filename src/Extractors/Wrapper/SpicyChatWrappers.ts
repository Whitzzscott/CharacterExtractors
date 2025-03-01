import axios from "axios";
import { SpicyChatData } from "../Types/SpicyChatTypes"

const SPICYCHAT_API_URL = "https://4mpanjbsf6.execute-api.us-east-1.amazonaws.com/v2/characters/";

export async function fetchSpicyChatData(url: string, spicyChatToken: string): Promise<SpicyChatData> {
    try {
        if (!url) {
            throw new Error("Missing URL parameter");
        }

        console.log("Extracting chatId from URL...");
        const match = url.match(/spicychat\.ai\/chat\/([a-f0-9\-]+)/);
        if (!match) {
            throw new Error("chat_id not found in the URL");
        }

        const chatId = match[1];
        console.log("Extracted chatId:", chatId);

        const apiUrl = `${SPICYCHAT_API_URL}${chatId}`;
        const headers = {
            Authorization: `Bearer ${spicyChatToken}`
        };

        console.log("Making API request to SpicyChat...");
        const response = await axios.get(apiUrl, { headers });

        if (response.status === 200) {
            console.log("API response received successfully");
            return response.data as SpicyChatData;
        } else {
            throw new Error(`API request failed: ${response.statusText}`);
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        console.error("Error:", errorMessage);
        throw new Error(errorMessage);
    }
}
