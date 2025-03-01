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
const SpicyChatWrappers_1 = require("../Extractors/Wrapper/SpicyChatWrappers");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = "https://spicychat.ai/chat/123456";
            const spicyChatToken = "YOUR_SPICY_CHAT_TOKEN_HERE";
            const data = yield (0, SpicyChatWrappers_1.fetchSpicyChatData)(url, spicyChatToken);
            console.log("Extracted SpicyChat Data:", data);
        }
        catch (error) {
            console.error("Fetching failed:", error);
        }
    });
}
main();
