import express from "express";
import AppRouter  from "./routes/AppRouter.js";
import {RootRoute} from "./routes/Route.js";
import dotenv from "dotenv";

dotenv.config();

const app : express.Express = express(),
      root_route : RootRoute = new RootRoute('/','get'),
      app_router : AppRouter = new AppRouter([root_route]);

app_router.setRoutes();

app.use(app_router.AppRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log(`APP working \nPORT: ${process.env.APP_PORT}`);
});