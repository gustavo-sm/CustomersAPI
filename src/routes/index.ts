import express from "express";
import { IRoute } from "./interfaces/IRoute.js";
import { AppRouter } from "./router/AppRouter.js";
import { RootRoute } from "./RootRoute.js";
import { CustomersRouteGET } from "./CustomersRoute.js";

class IndexRoutes {
    public static groupRoutes(app : express.Express) : void {
        const root_route : IRoute = new RootRoute('/'),
              customers_route : IRoute = new CustomersRouteGET('/customers/:custName?'),
              app_router : AppRouter = new AppRouter([root_route, customers_route]);

        app_router.setRoutes();
        app.use(app_router.AppRouter);
    }
}

export { IndexRoutes };