import { FlowGPTAPI } from "../Extractors/Api/FlowGPTAPI";

async function main() {
    try {
        const url = "https://flowgpt.com/chat/some-chat-id";
        const data = await FlowGPTAPI.fetchData(url);
        console.log("FlowGPT Data:", data);
    } catch (error) {
        console.error("Error fetching FlowGPT data:", error);
    }
}

main();
