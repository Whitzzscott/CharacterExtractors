import axios from "axios";
import * as cheerio from "cheerio";
import { ScrapedData } from "../Types/SakuraAiTypes"


export async function scrapeData(url: string): Promise<ScrapedData> {
    try {
        if (!url) {
            throw new Error("Missing URL parameter");
        }

        console.log(`Fetching page content from: ${url}`);
        const headers = { "User-Agent": "Mozilla/5.0" };
        const response = await axios.get(url, { headers });

        console.log("Parsing HTML data...");
        const $ = cheerio.load(response.data);
        const container = $("div.flex.flex-col.space-y-6.pt-6");

        if (!container.length) {
            throw new Error("Container not found in the page");
        }

        console.log("Extracting data...");
        const extractedData: ScrapedData = {
            name: container.find(".text-muted-foreground.line-clamp-2").map((_, el) => $(el).text().trim()).get(),
            description: container.find(".text-muted-foreground.line-clamp-3").map((_, el) => $(el).text().trim()).get(),
            scenario: container.find(".text-muted-foreground.line-clamp-5").map((_, el) => $(el).text().trim()).get(),
            firstMessage: container.find(".bg-message-assistant").map((_, el) => $(el).text().trim()).get(),
        };

        console.log("Scraped data successfully:", extractedData);
        return extractedData;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        console.error("Error:", errorMessage);
        throw new Error(errorMessage);
    }
}
