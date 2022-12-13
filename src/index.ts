import express from "express";
import { AppRouter }  from "./routes/router/AppRouter.js";
import { RootRoute } from "./routes/RootRoute.js";
import { CustomersRoute } from "./routes/CustomersRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app : express.Express = express();
app.disable('x-powered-by');

const root_route : RootRoute = new RootRoute('/'),
customers_route : CustomersRoute = new CustomersRoute('/customers/:custId?'),
app_router : AppRouter = new AppRouter([root_route, customers_route]);

app_router.setRoutes();

app.use(app_router.AppRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log(`APP working \nPORT: ${process.env.APP_PORT}`);
});