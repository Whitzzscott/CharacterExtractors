import { scrapeData } from "../Extractors/Wrapper/SakuraAiWrapper";

async function main() {
    try {
        const url = "https://example.com";
        const data = await scrapeData(url);
        console.log("Extracted Data:", data);
    } catch (error) {
        console.error("Scraping failed:", error);
    }
}

main();
