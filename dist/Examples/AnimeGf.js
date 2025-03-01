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
const AnimeGFWrapper_1 = require("../Extractors/Wrapper/AnimeGFWrapper");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const config = {
            APikey: "your-api-key",
            Authorization_Token: "your-auth-token"
        };
        const animeScraper = new AnimeGFWrapper_1.AnimeGFWrapper(config);
        try {
            const url = "https://anime.gf/chat?chatID=12345";
            const characters = yield animeScraper.scrapeChat(url);
            console.log("Extracted Characters:", characters);
        }
        catch (error) {
            console.error("Error fetching chat data:", error);
        }
    });
}
main();
