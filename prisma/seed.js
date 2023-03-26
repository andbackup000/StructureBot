"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../src/database/prismaClient");
async function main() {
    await prismaClient_1.prismaClient.trades.create({
        data: {
            orderId: "6f54adf321ads65",
            symbol: "BTC/USDT",
            side: "buy",
            moment: "2022-03-18T15:17:22.846Z",
            quantity: 1.56,
            priceUSD: 0.65852,
            timestamp: 163216823186
        }
    });
    await prismaClient_1.prismaClient.trades.create({
        data: {
            orderId: "sdjjad445564",
            symbol: "ETH/USDT",
            side: "sell",
            moment: "2022-03-11T12:17:22.846Z",
            quantity: 16,
            priceUSD: 0.52,
            timestamp: 145616823186
        }
    });
    await prismaClient_1.prismaClient.trades.create({
        data: {
            orderId: "sgslfdkjgçsdf45564",
            symbol: "ADA/USDT",
            side: "buy",
            moment: "2021-04-11T12:20:22.846Z",
            quantity: 2.586,
            priceUSD: 0.8962,
            timestamp: 168936316823186
        }
    });
}
main();
