"use strict";
// The source code is available in Extractors.
//
// This package is free to use, modify, and distribute, provided that proper credit is given to the original author.
// Commercial use is permitted only with clear attribution to the original author.
// Private/internal use without attribution is strictly prohibited.
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
const SakuraAiWrapper_1 = require("./Extractors/Wrapper/SakuraAiWrapper");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = "https://www.sakura.fm/chat/wuwcN3Q?id=THK1xNk";
            const data = yield (0, SakuraAiWrapper_1.scrapeData)(url);
            console.log("Extracted Data:", data);
        }
        catch (error) {
            console.error("Scraping failed:", error);
        }
    });
}
main();
