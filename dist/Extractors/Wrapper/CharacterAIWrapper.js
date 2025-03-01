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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterAIWrapper = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = "https://plus.character.ai/chat/character/info/";
class CharacterAIWrapper {
    constructor(apiToken) {
        this.apiToken = apiToken;
    }
    scrapeCharacter(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!url) {
                    throw new Error("Missing URL parameter");
                }
                console.log(`Extracting external ID from URL: ${url}`);
                const match = url.match(/character\.ai\/(?:chat|chat2|characters)\/([\w-]+)/);
                if (!match) {
                    throw new Error("Invalid Character AI URL format");
                }
                const externalId = match[1];
                console.log(`Extracted external ID: ${externalId}`);
                const headers = {
                    Authorization: `Token ${this.apiToken}`,
                    "Content-Type": "application/json",
                };
                console.log(`Fetching character data from Character AI API...`);
                const response = yield axios_1.default.post(API_URL, { external_id: externalId }, { headers });
                if (response.status === 200) {
                    const characterInfo = response.data.character;
                    if (!characterInfo) {
                        throw new Error("Character not found");
                    }
                    return {
                        title: characterInfo.title || "Unknown",
                        name: characterInfo.name || "Unknown",
                        greeting: characterInfo.greeting || "No greeting available",
                        description: characterInfo.description || "No description available",
                        avatar: characterInfo.avatar_file_name || "",
                        updated: characterInfo.updated || new Date().toISOString(),
                        created_by: "Better Sakura",
                        response_time: new Date().toISOString(),
                    };
                }
                else {
                    throw new Error(`API returned status ${response.status}`);
                }
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
                console.error("Error:", errorMessage);
                throw new Error(errorMessage);
            }
        });
    }
}
exports.CharacterAIWrapper = CharacterAIWrapper;
