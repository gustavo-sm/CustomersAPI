import { Customers } from "../models/Customers.js";
import { IDatabaseConnection } from "./interfaces/IDatabaseConnection.js";
import { IService } from "./interfaces/IService";
import { MySqlDatabaseConnection } from "./MySqlDatabaseConnection.js";
import * as mysql  from "mysql2";

import dotenv from 'dotenv';
dotenv.config();

class CustomersService implements IService <Customers> {
    private db_interface : IDatabaseConnection<mysql.Connection, mysql.RowDataPacket[]>

    constructor(){
        this.db_interface = new MySqlDatabaseConnection(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);
    }

    public async getAll() : Promise<Customers[]> {
        this.db_interface.connect();

        const cust_arr : Customers[] = [],
        results = await this.db_interface.query("SELECT * FROM 01custdata", []);
        this.db_interface.close();

        if(results.length === 0){
            return cust_arr;
        }

        for(let i: number = 0; i< results.length; i++){
            let cust_inst : Customers = new Customers(results[i].cust_id,results[i].cust_name, results[i].cust_calc);
            cust_arr.push(cust_inst);
        }
        

        return cust_arr;
    }

    public async getByName(cust_name : string) : Promise<Customers> {
        try{
            this.db_interface.connect();
        
            const results = await this.db_interface.query("SELECT * FROM 01custdata where cust_name = ?", [cust_name]);
            this.db_interface.close();

            if(results.length === 0){
                return new Customers(0,'','');
            }

            const cust_inst : Customers = new Customers(results[0].cust_id, results[0].cust_name, results[0].cust_calc);

            return cust_inst;

        } catch(err) {
            console.log(err);
            throw new Error(err);
        }
    }
    
}

export { CustomersService };