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
const CharacterAIWrapper_1 = require("../Extractors/Wrapper/CharacterAIWrapper");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiToken = ""; // Replace with Your Own Token
        const characterAI = new CharacterAIWrapper_1.CharacterAIWrapper(apiToken);
        try {
            const url = "https://character.ai/chat/12345";
            const characterData = yield characterAI.scrapeCharacter(url);
            console.log("Extracted Character Data:", characterData);
        }
        catch (error) {
            console.error("Error fetching character data:", error);
        }
    });
}
main();
