"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeChatScrape = AnimeChatScrape;
const AnimeGFAPI_1 = require("../Extractors/Wrapper/AnimeGFAPI");
function AnimeChatScrape(url, config) {
    return __awaiter(this, void 0, void 0, function* () {
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
            const data = yield (0, AnimeGFAPI_1.fetchChatData)(chatId, config);
            return data.map((character) => ({
                name: character.characters.name,
                title: character.characters.title,
                tagline: character.characters.tagline.replace("\n", ""),
                scenario: character.characters.scenario.replace("\n", ""),
                alternative_greetings: character.characters.alternative_greetings,
                creator: character.characters.profiles.username,
                author: "Better Sakura",
                created_at: character.characters.created_at
            }));
        }
        catch (error) {
            console.error("Error:", error.message);
            throw new Error(error.message);
        }
    });
}
