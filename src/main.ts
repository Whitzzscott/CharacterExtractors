// The source code is available in Extractors.
//
// This package is free to use, modify, and distribute, provided that proper credit is given to the original author.
// Commercial use is permitted only with clear attribution to the original author.
// Private/internal use without attribution is strictly prohibited.

//This is a default test choice meaning you are free to modify this to however you see fit.

import { scrapeData } from "./Extractors/Wrapper/SakuraAiWrapper";

async function main() {
    try {
        const url = "https://www.sakura.fm/chat/wuwcN3Q?id=THK1xNk";
        const data = await scrapeData(url);
        console.log("Extracted Data:", data);
    } catch (error) {
        console.error("Scraping failed:", error);
    }
}

main();
