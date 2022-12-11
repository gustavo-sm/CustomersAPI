import express from "express";
import { AppRouter }  from "./routes/router/AppRouter.js";
import { RootRoute, CustomersRoute } from "./routes/Route.js";
import dotenv from "dotenv";

dotenv.config();
const app : express.Express = express();

const root_route : RootRoute = new RootRoute('/','get'),
customers_route : CustomersRoute = new CustomersRoute('/customers/:custId?', 'get'),
app_router : AppRouter = new AppRouter([root_route, customers_route]);

app_router.setRoutes();

app.use(app_router.AppRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log(`APP working \nPORT: ${process.env.APP_PORT}`);
});