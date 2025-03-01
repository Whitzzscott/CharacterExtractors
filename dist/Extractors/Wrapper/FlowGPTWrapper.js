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
exports.FlowGPTWrapper = void 0;
const FlowGPTAPI_1 = require("../Api/FlowGPTAPI");
class FlowGPTWrapper {
    static getCharacterData(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!url) {
                    throw new Error("Missing URL parameter");
                }
                console.log(`Extracting Character ID from: ${url}`);
                const match = url.match(/flowgpt\.com\/chat\/([\w-]+)/);
                if (!match) {
                    throw new Error("Invalid FlowGPT URL format");
                }
                const characterId = match[1];
                return yield FlowGPTAPI_1.FlowGPTAPI.fetchData(characterId);
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
                console.error("Error:", errorMessage);
                throw new Error(errorMessage);
            }
        });
    }
}
exports.FlowGPTWrapper = FlowGPTWrapper;
