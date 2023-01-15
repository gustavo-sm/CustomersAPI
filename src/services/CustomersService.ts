import { Customers } from "../models/Customers.js";
import { IDatabaseConnection } from "./interfaces/IDatabaseConnection.js";
import { IServiceGET, IServicePOST } from "./interfaces/IService";
import { Connection, RowDataPacket } from "mysql2";

class CustomersServiceGET implements IServiceGET <Customers> {

    private db_interface : IDatabaseConnection<Connection, RowDataPacket[]>;

    constructor(db_interface : IDatabaseConnection<Connection, RowDataPacket[]>){
        this.db_interface = db_interface;
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

class CustomersServicePOST implements IServicePOST <Customers>{
    private db_interface : IDatabaseConnection<Connection, RowDataPacket[]>;

    constructor(db_interface : IDatabaseConnection<Connection, RowDataPacket[]>){
        this.db_interface = db_interface;
    }
    public async create(customer: Customers): Promise<Customers> {
        this.db_interface.connect();
        this.db_interface.query("INSERT INTO 01custdata VALUES(?)", [customer]);
        return;
    }

}

export { CustomersServiceGET, CustomersServicePOST };