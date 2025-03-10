"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowGPTWrapper = exports.CharacterAIWrapper = exports.fetchSpicyChatData = exports.fetchChatData = exports.AnimeGFWrapper = void 0;
const AnimeGFWrapper_1 = require("./Extractors/Wrapper/AnimeGFWrapper");
Object.defineProperty(exports, "AnimeGFWrapper", { enumerable: true, get: function () { return AnimeGFWrapper_1.AnimeGFWrapper; } });
const AnimeGFAPI_1 = require("./Extractors/Api/AnimeGFAPI");
Object.defineProperty(exports, "fetchChatData", { enumerable: true, get: function () { return AnimeGFAPI_1.fetchChatData; } });
const SpicyChatWrappers_1 = require("./Extractors/Wrapper/SpicyChatWrappers");
Object.defineProperty(exports, "fetchSpicyChatData", { enumerable: true, get: function () { return SpicyChatWrappers_1.fetchSpicyChatData; } });
const CharacterAIWrapper_1 = require("./Extractors/Wrapper/CharacterAIWrapper");
Object.defineProperty(exports, "CharacterAIWrapper", { enumerable: true, get: function () { return CharacterAIWrapper_1.CharacterAIWrapper; } });
const FlowGPTWrapper_1 = require("./Extractors/Wrapper/FlowGPTWrapper");
Object.defineProperty(exports, "FlowGPTWrapper", { enumerable: true, get: function () { return FlowGPTWrapper_1.FlowGPTWrapper; } });
