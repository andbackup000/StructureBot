"use strict";
exports.__esModule = true;
var tsyringe_1 = require("tsyringe");
var TradesRepository_1 = require("../../modules/tradesOperations/repositories/implametations/TradesRepository");
var UserRepository_1 = require("../../modules/users/repositories/implametations/UserRepository");
tsyringe_1.container.registerSingleton("UserRepository", UserRepository_1.UserRepository);
tsyringe_1.container.registerSingleton("TradesRepository", TradesRepository_1.TradesRepository);
