"use strict";
exports.__esModule = true;
exports.userRoutes = void 0;
var express_1 = require("express");
var AuthenticateUserController_1 = require("../modules/users/useCases/usersControllers/AuthenticateUserController");
var CreateUserController_1 = require("../modules/users/useCases/usersControllers/CreateUserController");
var userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
var createUser = new CreateUserController_1.CreateUserController();
var authenticateUser = new AuthenticateUserController_1.AuthenticateUserController();
userRoutes.post("/", createUser.handle);
userRoutes.post("/session", authenticateUser.handle);