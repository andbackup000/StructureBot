"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTradesController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateTradeUseCase_1 = require("../CreateTradeUseCase");
class CreateTradesController {
    async handle(request, response) {
        const { moment, orderId, priceUSD, quantity, side, symbol, timestamp } = request.body;
        const createTradesUseCase = tsyringe_1.container.resolve(CreateTradeUseCase_1.CreateTradesUseCase);
        const trade = await createTradesUseCase.execute({
            moment,
            orderId,
            priceUSD,
            quantity,
            side,
            symbol,
            timestamp,
        });
        return response.status(201).json(trade);
    }
}
exports.CreateTradesController = CreateTradesController;
