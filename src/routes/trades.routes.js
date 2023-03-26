"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSideTrade = exports.tradeRoutes = void 0;
const express_1 = require("express");
const CreateTradeController_1 = require("../modules/tradesOperations/useCases/tradesControllers/CreateTradeController");
const FindSideTradeController_1 = require("../modules/tradesOperations/useCases/tradesControllers/FindSideTradeController");
const tradeRoutes = (0, express_1.Router)();
exports.tradeRoutes = tradeRoutes;
const createtrade = new CreateTradeController_1.CreateTradesController();
const findSideTrade = new FindSideTradeController_1.FindSideTradesController();
exports.findSideTrade = findSideTrade;
tradeRoutes.post("/", createtrade.handle);
tradeRoutes.get("/side", findSideTrade.handle);
