"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateUserUseCase_1 = require("../CreateUserUseCase");
class CreateUserController {
    async handle(request, response) {
        const { name, email, password } = request.body;
        const createUserUseCase = tsyringe_1.container.resolve(CreateUserUseCase_1.CreateUserUseCase);
        const user = await createUserUseCase.execute({
            name,
            email,
            password,
        });
        return response.status(201).json(user);
    }
}
exports.CreateUserController = CreateUserController;
