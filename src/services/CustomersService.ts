import { Customers } from "../models/Customers.js";
import { IDatabaseConnection } from "./interfaces/IDatabaseConnection.js";
import { IService } from "./interfaces/IService";
import { MySqlDatabaseConnection } from "./MySqlDatabaseConnection";
import * as mysql  from "mysql2";

import dotenv from 'dotenv';
dotenv.config();

class CustomersService implements IService <Customers> {
    db_interface : IDatabaseConnection<mysql.Connection, mysql.RowDataPacket[]>

    constructor(){
        this.db_interface = new MySqlDatabaseConnection(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);
    }

    public async getAll() : Promise<Customers[]> {
        this.db_interface.connect();
        const cust_arr : Customers[] = [],
              results = await this.db_interface.query("SELECT * FROM 01custdata", []);

        for(let i: number = 0; i< results.length; i++){
            let cust_inst : Customers = new Customers(results[i].cust_id,results[i].cust_name, results[i].cust_calc);
            cust_arr.push(cust_inst);
        }
        this.db_interface.close();
        return cust_arr;
    }
    public getById(cust_id : number) : Promise<Customers[]> {return;}
    
}

export { CustomersService };