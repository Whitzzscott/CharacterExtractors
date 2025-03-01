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
exports.FlowGPTAPI = void 0;
const axios_1 = __importDefault(require("axios"));
class FlowGPTAPI {
    static fetchData(characterId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!characterId) {
                    throw new Error("Missing Character ID");
                }
                const apiUrl = `${this.BASE_URL}${characterId}/`;
                console.log(`Fetching data from API: ${apiUrl}`);
                const response = yield axios_1.default.get(apiUrl);
                if (response.status !== 200 || !response.data.prompt) {
                    throw new Error(`Invalid API response: ${response.statusText}`);
                }
                const data = response.data.prompt;
                return {
                    title: data.title || "Unknown",
                    language: data.language || "Unknown",
                    description: data.description || "No description available",
                    coverURL: data.coverURL || "",
                    thumbnailURL: data.thumbnailURL || "",
                    type: data.type || "Unknown",
                    nsfw: data.nsfw || false,
                    exampleConversation: data.exampleConversation || [],
                    tags: data.promptTags ? data.promptTags.map((tag) => tag[3]) : [],
                };
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
                console.error("Error:", errorMessage);
                throw new Error(errorMessage);
            }
        });
    }
}
exports.FlowGPTAPI = FlowGPTAPI;
FlowGPTAPI.BASE_URL = "https://prod-backend-k8s.flowgpt.com/prompt/";
