import { Router } from "express";
import { Route } from "./Route";
import { IAppRoutes } from "../interfaces/IAppRouter";

class AppRouter implements IAppRoutes{
    private app_router : Router;
    private routes : Route[];

    constructor(routes : Route[]){
        this.app_router = Router();
        this.routes = routes;
    }

    public get AppRouter() {
        return this.app_router;
    }
    
    public setRoutes(){
        let routes_arr_length : number = this.routes.length;
        for(let i : number = 0; i<routes_arr_length; i++){
            if(this.routes[i].Method === 'get')
                this.app_router.get(this.routes[i].Path, this.routes[i].task);
        }
    }
    
    public routeExists() : boolean{
        return true;
    }

}

export { AppRouter };