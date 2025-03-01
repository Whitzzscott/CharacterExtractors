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
const FlowGPTAPI_1 = require("../Extractors/Api/FlowGPTAPI");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = "https://flowgpt.com/chat/some-chat-id";
            const data = yield FlowGPTAPI_1.FlowGPTAPI.fetchData(url);
            console.log("FlowGPT Data:", data);
        }
        catch (error) {
            console.error("Error fetching FlowGPT data:", error);
        }
    });
}
main();
