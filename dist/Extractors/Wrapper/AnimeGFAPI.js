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
exports.fetchChatData = fetchChatData;
const axios_1 = __importDefault(require("axios"));
const API_URL = "https://pjoabwtwjcpohcpuhijy.supabase.co/rest/v1/chats_characters";
function fetchChatData(chatId, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = {
            select: "characters(id,name,greeting,alternative_greetings,avatar_file_name,banner_file_name,scenario,is_nsfw,is_forced_nsfw,is_private,profiles!characters_created_by_fkey(username),created_at,updated_at,title,tagline,total_like_count,total_message_count,tag_ids,external_created_by,characters_likes(profile_id),deleted_at)",
            chat_id: `eq.${chatId}`,
            "characters.characters_likes.profile_id": "eq.e322e137-b75c-49d9-8307-31c0fca76af1"
        };
        const headers = {
            "Authorization": `Bearer ${config.Authorization_Token}`,
            "Content-Type": "application/json",
            "apikey": config.APikey
        };
        try {
            console.log(`Fetching chat data for chat ID: ${chatId}`);
            const response = yield axios_1.default.get(API_URL, { headers, params });
            if (response.status === 200) {
                return response.data;
            }
            else {
                throw new Error(`API returned status ${response.status}`);
            }
        }
        catch (error) {
            throw new Error(`Failed to fetch chat data: ${error.message}`);
        }
    });
}
