import { AnimeGFWrapper } from "../Extractors/Wrapper/AnimeGFWrapper";
import { AnimeGfApi } from "../Extractors/Types/AnimeTypes";

async function main() {
    const config: AnimeGfApi = {
        APikey: "your-api-key",
        Authorization_Token: "your-auth-token"
    };

    const animeScraper = new AnimeGFWrapper(config);

    try {
        const url = "https://anime.gf/chat?chatID=12345";
        const characters = await animeScraper.scrapeChat(url);
        console.log("Extracted Characters:", characters);
    } catch (error) {
        console.error("Error fetching chat data:", error);
    }
}

main();
