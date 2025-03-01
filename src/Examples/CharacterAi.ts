import { CharacterAIWrapper } from "../Extractors/Wrapper/CharacterAIWrapper";

async function main() {
    const apiToken = ""; // Replace with Your Own Token
    const characterAI = new CharacterAIWrapper(apiToken);

    try {
        const url = "https://character.ai/chat/12345";
        const characterData = await characterAI.scrapeCharacter(url);
        console.log("Extracted Character Data:", characterData);
    } catch (error) {
        console.error("Error fetching character data:", error);
    }
}

main();
