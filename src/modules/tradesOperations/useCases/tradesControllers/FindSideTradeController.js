"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindSideTradesController = void 0;
const tsyringe_1 = require("tsyringe");
const FindSideTradesUseCase_1 = require("../FindSideTradesUseCase");
class FindSideTradesController {
    async handle(request, response) {
        const { side } = request.params;
        const findSideTradesUseCase = tsyringe_1.container.resolve(FindSideTradesUseCase_1.FindSideTradesUseCase);
        const findtrade = await findSideTradesUseCase.execute(side);
        return response.status(200).json(findtrade);
    }
}
exports.FindSideTradesController = FindSideTradesController;
