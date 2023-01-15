import { Request, Response } from "express";
import { IRoute } from "./interfaces/IRoute";
import { CustomersController } from "../controllers/CustomersController.js";
import { AppResponse } from "../models/AppResponse";

class CustomersRouteGET implements IRoute {
    private _path : string;
    constructor(path : string) {
        this._path = path;
    }

    get path(): string {
        return this._path;
    }

    public async task(req : Request, res : Response) : Promise<void> {
        
        let resp : AppResponse;
        if(req.params.custName){
            resp = await CustomersController.getCustomer(req.params.custName);
        }
        else {
            resp = await CustomersController.getCustomers();
        }
        res.status(resp.statusCode).send(resp.data);
        
        
    }
}

class CustomersRoutePOST implements IRoute {
    private _path : string;
    constructor(path : string) {
        this._path = path;
    }

    get path(): string {
        return this._path;
    }

    public async task(req : Request, res : Response) : Promise<void> {
        
        const resp : AppResponse = await CustomersController.createCustomer();
        res.status(resp.statusCode).send(resp.data);

    }
}

export { CustomersRouteGET, CustomersRoutePOST };