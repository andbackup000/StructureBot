"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
class UserRepository {
    async create({ name, email, password }) {
        const user = await prismaClient_1.prismaClient.user.create({
            data: {
                name,
                email,
                password
            }
        });
        return user;
    }
    async findByEmail(email) {
        const user = await prismaClient_1.prismaClient.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    }
    async findById(id) {
        const user = await prismaClient_1.prismaClient.user.findUnique({
            where: {
                id,
            },
        });
        return user;
    }
}
exports.UserRepository = UserRepository;
