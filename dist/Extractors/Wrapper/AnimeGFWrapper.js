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
exports.AnimeGFWrapper = void 0;
const AnimeGFAPI_1 = require("../Api/AnimeGFAPI");
class AnimeGFWrapper {
    constructor(config) {
        this.config = config;
    }
    scrapeChat(url) {
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
                const data = yield (0, AnimeGFAPI_1.fetchChatData)(chatId, this.config.Authorization_Token, this.config.APikey);
                if (!Array.isArray(data)) {
                    throw new Error("Invalid API response: Expected an array");
                }
                return data.map((character) => {
                    var _a, _b, _c;
                    if (!character.characters) {
                        throw new Error("Invalid character data structure");
                    }
                    return {
                        name: character.characters.name || "Unknown",
                        title: character.characters.title || "No Title",
                        tagline: ((_a = character.characters.tagline) === null || _a === void 0 ? void 0 : _a.replace("\n", "")) || "",
                        scenario: ((_b = character.characters.scenario) === null || _b === void 0 ? void 0 : _b.replace("\n", "")) || "",
                        alternative_greetings: character.characters.alternative_greetings || [],
                        creator: ((_c = character.characters.profiles) === null || _c === void 0 ? void 0 : _c.username) || "Unknown",
                        author: "Better Sakura",
                        created_at: character.characters.created_at || "Unknown"
                    };
                });
            }
            catch (error) {
                console.error("Error in AnimeChatScrape:", error);
                throw new Error(error instanceof Error ? error.message : "An unknown error occurred.");
            }
        });
    }
}
exports.AnimeGFWrapper = AnimeGFWrapper;
