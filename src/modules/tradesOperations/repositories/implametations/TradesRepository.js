"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradesRepository = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
class TradesRepository {
    async create({ moment, orderId, priceUSD, quantity, side, symbol, timestamp }) {
        const trade = await prismaClient_1.prismaClient.trades.create({
            data: {
                moment,
                orderId,
                priceUSD,
                quantity,
                side,
                symbol,
                timestamp
            }
        });
        return trade;
    }
    async findByDate(moment) {
        const tradeDate = await prismaClient_1.prismaClient.trades.findMany({
            where: {
                moment,
            },
        });
        return tradeDate;
    }
    async findBySide(side) {
        const tradeSide = await prismaClient_1.prismaClient.trades.findMany({
            where: {
                side,
            }
        });
        return tradeSide;
    }
    async findBySymbol(symbol) {
        const tradeSymbol = await prismaClient_1.prismaClient.trades.findMany({
            where: {
                symbol,
            },
        });
        return tradeSymbol;
    }
    async findById(id) {
        const identification = await prismaClient_1.prismaClient.trades.findUnique({
            where: {
                id,
            },
        });
        return identification;
    }
}
exports.TradesRepository = TradesRepository;
