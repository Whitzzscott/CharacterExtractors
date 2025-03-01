import { AnimeGFWrapper } from "./Extractors/Wrapper/AnimeGFWrapper";
import { fetchChatData } from "./Extractors/Api/AnimeGFAPI";
import { fetchSpicyChatData } from "./Extractors/Wrapper/SpicyChatWrappers";
import { CharacterAIWrapper } from "./Extractors/Wrapper/CharacterAIWrapper";
import { FlowGPTWrapper } from "./Extractors/Wrapper/FlowGPTWrapper";

export { 
    AnimeGFWrapper, 
    fetchChatData, 
    fetchSpicyChatData, 
    CharacterAIWrapper, 
    FlowGPTWrapper 
};