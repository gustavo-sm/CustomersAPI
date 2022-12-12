export interface IAppRouter {
    setRoutes() : void;
    routeExists(path_check : string) : boolean;
}