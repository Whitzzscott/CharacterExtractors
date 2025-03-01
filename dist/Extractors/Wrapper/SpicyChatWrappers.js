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
exports.fetchSpicyChatData = fetchSpicyChatData;
const axios_1 = __importDefault(require("axios"));
const SPICYCHAT_API_URL = "https://4mpanjbsf6.execute-api.us-east-1.amazonaws.com/v2/characters/";
function fetchSpicyChatData(url, spicyChatToken) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!url) {
                throw new Error("Missing URL parameter");
            }
            console.log("Extracting chatId from URL...");
            const match = url.match(/spicychat\.ai\/chat\/([a-f0-9\-]+)/);
            if (!match) {
                throw new Error("chat_id not found in the URL");
            }
            const chatId = match[1];
            console.log("Extracted chatId:", chatId);
            const apiUrl = `${SPICYCHAT_API_URL}${chatId}`;
            const headers = {
                Authorization: `Bearer ${spicyChatToken}`
            };
            console.log("Making API request to SpicyChat...");
            const response = yield axios_1.default.get(apiUrl, { headers });
            if (response.status === 200) {
                console.log("API response received successfully");
                return response.data;
            }
            else {
                throw new Error(`API request failed: ${response.statusText}`);
            }
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
            console.error("Error:", errorMessage);
            throw new Error(errorMessage);
        }
    });
}
