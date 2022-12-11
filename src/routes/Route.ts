import { IRoute } from "../interfaces/IRoute";
import { Request, Response } from "express";

class Route implements IRoute {
    private path : string;
    private method: string;
    
    constructor(path : string, method : string) {
        this.path = path;
        this.method = method;
    }
    public get Path() {
        return this.path;
    }    
    
    public get Method() {
        return this.method;
    }

    task(req : Request, res : Response) : void {
        res.status(200).send('GET / OK');
    }
}

export default Route;