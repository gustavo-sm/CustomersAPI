import express from "express";
import { AppRouter } from "./router/AppRouter.js";
import { RootRoute } from "./RootRoute.js";
import { CustomersRoute } from "./CustomersRoute.js";

class IndexRoutes {
    public static groupRoutes(app : express.Express) : void {
        const root_route : RootRoute = new RootRoute('/'),
              customers_route : CustomersRoute = new CustomersRoute('/customers/:custId?'),
              app_router : AppRouter = new AppRouter([root_route, customers_route]);

        app_router.setRoutes();
        app.use(app_router.AppRouter);
    }
}

export { IndexRoutes };