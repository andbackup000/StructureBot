"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
const tsyringe_1 = require("tsyringe");
const AuthenticateUserUseCase_1 = require("../AuthenticateUserUseCase");
class AuthenticateUserController {
    async handle(request, response) {
        const { email, password } = request.body;
        const authenticateUserUseCase = tsyringe_1.container.resolve(AuthenticateUserUseCase_1.AuthenticateUserUseCase);
        const tokenResponse = await authenticateUserUseCase.execute(email, password);
        return response.json(tokenResponse);
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
