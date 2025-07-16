"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(router_1.router);
app.use((0, cookie_parser_1.default)());
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        // se for uma instancia tipo error
        res.status(400).json({ error: err.message });
        return;
    }
    res.status(500).json({
        status: "error",
        message: "Internal server error",
    });
    return;
});
app.get("/", (req, res) => {
    res.json({ status: "online", message: "API PrimeFlix funcionando 🍕" });
});
exports.default = app;
