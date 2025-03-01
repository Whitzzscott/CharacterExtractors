import { fetchSpicyChatData } from "../Extractors/Wrapper/SpicyChatWrappers";

async function main() {
    try {
        const url = "https://spicychat.ai/chat/123456";
        const spicyChatToken = "YOUR_SPICY_CHAT_TOKEN_HERE"; 

        const data = await fetchSpicyChatData(url, spicyChatToken);
        console.log("Extracted SpicyChat Data:", data);
    } catch (error) {
        console.error("Fetching failed:", error);
    }
}

main();
