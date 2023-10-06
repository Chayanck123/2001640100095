"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const numberRouter_1 = __importDefault(require("./routes/numberRouter"));
const server = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
server.get('/', (req, res) => {
    res.send("This server is working");
});
server.use('/', numberRouter_1.default);
server.listen(port, () => {
    console.log(`[server] : Server running on http://localhost:${port}`);
});
