import { fetchChatData } from "../Api/AnimeGFAPI";
import { AnimeGfApi, CharacterData } from "../Types/AnimeTypes";

export class AnimeGFWrapper {
    private config: AnimeGfApi;

    constructor(config: AnimeGfApi) {
        this.config = config;
    }

    public async scrapeChat(url: string): Promise<CharacterData[]> {
        try {
            if (!url) {
                throw new Error("Missing URL parameter");
            }

            console.log(`Extracting chat ID from URL: ${url}`);
            const match = url.match(/chatID=(\d+)/);
            if (!match) {
                throw new Error("Invalid Anime.GF chat URL format");
            }

            const chatId = match[1];
            console.log(`Extracted chat ID: ${chatId}`);

            const data = await fetchChatData(chatId, this.config.Authorization_Token, this.config.APikey);

            if (!Array.isArray(data)) {
                throw new Error("Invalid API response: Expected an array");
            }

            return data.map((character: any): CharacterData => {
                if (!character.characters) {
                    throw new Error("Invalid character data structure");
                }

                return {
                    name: character.characters.name || "Unknown",
                    title: character.characters.title || "No Title",
                    tagline: character.characters.tagline?.replace("\n", "") || "",
                    scenario: character.characters.scenario?.replace("\n", "") || "",
                    alternative_greetings: character.characters.alternative_greetings || [],
                    creator: character.characters.profiles?.username || "Unknown",
                    author: "Better Sakura",
                    created_at: character.characters.created_at || "Unknown"
                };
            });
        } catch (error: unknown) {
            console.error("Error in AnimeChatScrape:", error);
            throw new Error(error instanceof Error ? error.message : "An unknown error occurred.");
        }
    }
}
