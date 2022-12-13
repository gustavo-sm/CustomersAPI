import { Request, Response } from "express";
import { IRoute } from "./interfaces/IRoute";
import { CustomersController } from "../controllers/CustomersController.js";


class CustomersRoute implements IRoute {
    private _path : string;
    constructor(path : string) {
        this._path = path;
    }

    get path(): string {
        return this._path;
    }

    public task(req : Request, res : Response) : void {
        const response : string = CustomersController.getCustomers(req.params.custId);
        res.status(200).send(response);
    }
}

export { CustomersRoute };