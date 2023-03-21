"use strict";
exports.__esModule = true;
exports.ensureAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var AppError_1 = require("../../errors/AppError");
var UserRepository_1 = require("../../modules/users/repositories/implametations/UserRepository");
function ensureAuthenticated(request, resposnse, next) {
    var authToken = request.headers.authorization;
    if (!authToken) {
        return resposnse.status(401).json({
            errorCode: "token invalid"
        });
    }
    var _a = authToken.split(" "), token = _a[1];
    var user_id = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET).sub;
    var userRepository = new UserRepository_1.UserRepository();
    var user = userRepository.findById(user_id);
    if (!user) {
        throw new AppError_1.AppError("Token invalid!", 401);
    }
    request.user = {
        id: user_id
    };
    next();
}
exports.ensureAuthenticated = ensureAuthenticated;
