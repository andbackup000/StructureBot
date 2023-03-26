"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const TradesRepository_1 = require("../../modules/tradesOperations/repositories/implametations/TradesRepository");
const UserRepository_1 = require("../../modules/users/repositories/implametations/UserRepository");
tsyringe_1.container.registerSingleton("UserRepository", UserRepository_1.UserRepository);
tsyringe_1.container.registerSingleton("TradesRepository", TradesRepository_1.TradesRepository);
