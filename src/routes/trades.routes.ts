import { Router } from "express"
import { CreateTradesUseCase } from "../modules/tradesOperations/useCases/CreateTradeUseCase";
import { CreateTradesController } from "../modules/tradesOperations/useCases/tradesControllers/CreateTradeController";
import { AuthenticateUserController } from "../modules/users/useCases/usersControllers/AuthenticateUserController";
import { CreateUserController } from "../modules/users/useCases/usersControllers/CreateUserController"
import { ensureAuthenticated } from "../shared/middleware/ensureAuthenticated";


const tradeRoutes = Router()

const createtrade = new CreateTradesController();

tradeRoutes.post("/", createtrade.handle);


export { tradeRoutes };