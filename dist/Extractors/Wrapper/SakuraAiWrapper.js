"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.scrapeData = scrapeData;
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
function scrapeData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!url) {
                throw new Error("Missing URL parameter");
            }
            console.log(`Fetching page content from: ${url}`);
            const headers = { "User-Agent": "Mozilla/5.0" };
            const response = yield axios_1.default.get(url, { headers });
            console.log("Parsing HTML data...");
            const $ = cheerio.load(response.data);
            const container = $("div.flex.flex-col.space-y-6.pt-6");
            if (!container.length) {
                throw new Error("Container not found in the page");
            }
            console.log("Extracting data...");
            const extractedData = {
                name: container.find(".text-muted-foreground.line-clamp-2").map((_, el) => $(el).text().trim()).get(),
                description: container.find(".text-muted-foreground.line-clamp-3").map((_, el) => $(el).text().trim()).get(),
                scenario: container.find(".text-muted-foreground.line-clamp-5").map((_, el) => $(el).text().trim()).get(),
                firstMessage: container.find(".bg-message-assistant").map((_, el) => $(el).text().trim()).get(),
            };
            console.log("Scraped data successfully:", extractedData);
            return extractedData;
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
            console.error("Error:", errorMessage);
            throw new Error(errorMessage);
        }
    });
}
