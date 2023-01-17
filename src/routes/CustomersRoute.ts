import { Request, Response } from "express";
import { IRoute } from "./interfaces/IRoute";
import { CustomersController } from "../controllers/CustomersController.js";
import { AppResponse } from "../models/AppResponse";
import { Customers } from "../models/Customers";

class CustomersRouteGET implements IRoute {
    private _path : string;
    constructor(path : string) {
        this._path = path;
    }

    get path(): string {
        return this._path;
    }

    public async task(req : Request, res : Response) : Promise<void> {
        
        let resp : AppResponse<Customers | Customers[]>;
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
        
        //const resp : AppResponse<Customers> = await CustomersController.createCustomer(req.body.name, req.body.color_calc);
        res.status(200).send("okay");

    }
}

export { CustomersRouteGET, CustomersRoutePOST };