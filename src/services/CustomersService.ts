import { Customers } from "../models/Customers.js";
import { IService } from "./interfaces/IService";
import { MySqlDatabaseConnection } from "./MySqlDatabaseConnection";

class CustomersService implements IService <MySqlDatabaseConnection, Customers> {
    db_interface : MySqlDatabaseConnection;

    constructor(db_conn : MySqlDatabaseConnection){
        this.db_interface = db_conn;
    }

    public async getAll() : Promise<Customers[]> {
        const cust_arr : Customers[] = [],
              results = await this.db_interface.query("SELECT * FROM 01custdata", []);

        for(let i: number = 0; i< results.length; i++){
            let cust_inst : Customers = new Customers(results[i].cust_id,results[i].cust_name, results[i].cust_calc);
            cust_arr.push(cust_inst);
        }
        
        return cust_arr;
    }
    public getById(cust_id : number) : Promise<Customers[]> {return;}
    
}

export { CustomersService };