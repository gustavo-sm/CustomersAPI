import { Customers } from "../models/Customers";
import { IService } from "./interfaces/IService";
import { MySqlDatabaseConnection } from "./MySqlDatabaseConnection";

class CustomersService implements IService<MySqlDatabaseConnection, Customers> {
    db_interface : MySqlDatabaseConnection;

    constructor(db_conn : MySqlDatabaseConnection){
        this.db_interface = db_conn;
    }

    public async getAll() : Promise<Customers[]>{
        return await this.db_interface.query("SELECT * FROM 01custdata",[]);
    }
    public getById(cust_id : number) : Promise<Customers[]> {return;}
    
}

export { CustomersService };