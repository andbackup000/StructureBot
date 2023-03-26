"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../../errors/AppError");
const UserRepository_1 = require("../../modules/users/repositories/implametations/UserRepository");
function ensureAuthenticated(request, resposnse, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return resposnse.status(401).json({
            errorCode: "token invalid",
        });
    }
    const [, token] = authToken.split(" ");
    const { sub: user_id } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
    const userRepository = new UserRepository_1.UserRepository();
    const user = userRepository.findById(user_id);
    if (!user) {
        throw new AppError_1.AppError("Token invalid!", 401);
    }
    request.user = {
        id: user_id,
    };
    next();
}
exports.ensureAuthenticated = ensureAuthenticated;
