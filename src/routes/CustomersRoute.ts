import { Request, Response } from "express";
import { IRoute } from "./interfaces/IRoute";
import { CustomersController } from "../controllers/CustomersController.js";
import { AppResponse } from "../models/AppResponse";

class CustomersRoute implements IRoute {
    private _path : string;
    constructor(path : string) {
        this._path = path;
    }

    get path(): string {
        return this._path;
    }

    public async task(req : Request, res : Response) : Promise<void> {
        const resp : AppResponse = await CustomersController.getCustomers();
        res.status(resp.statusCode).send(resp);
    }
}

export { CustomersRoute };