"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
require("reflect-metadata");
require("dotenv");
require("./shared/container");
const express_1 = __importDefault(require("express"));
const AppError_1 = require("./errors/AppError");
const routes_1 = require("./routes");
const kucoinStrategy_1 = __importDefault(require("./scripts/kucoinStrategy"));
const PORT = 4003;
const HOST = '0.0.0.0';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.routes);
app.use((err, request, response, next) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});
kucoinStrategy_1.default.pullBack();
app.listen(PORT, HOST, () => console.log("Server is running on PORT 4003"));
