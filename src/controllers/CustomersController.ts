import { CustomersServiceGET, CustomersServicePOST } from "../services/CustomersService.js";
import { AppResponse } from "../models/AppResponse.js";
import { Customers } from "../models/Customers.js";
import { MySqlDatabaseConnection } from "../services/MySqlDatabaseConnection.js";
import dotenv from 'dotenv';

dotenv.config();

class CustomersController {

    public static async createCustomer() : Promise< AppResponse<Customers> > {
        const response : AppResponse<Customers> = new AppResponse();
        try{
            const cust_service : CustomersServiceGET = new CustomersServiceGET(new MySqlDatabaseConnection(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD));
            
            return response;
        
        } catch(err){
            return response
        }
        
    }

    public static async getCustomer(cust_name : string) : Promise< AppResponse<Customers> > {
        const response : AppResponse<Customers> = new AppResponse();

        try {
            const cust_service : CustomersServiceGET = new CustomersServiceGET(new MySqlDatabaseConnection(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD)),
            result : Customers = await cust_service.getByName(cust_name);
            
            if(result.id === 0){
                response.createMessage(null, 404);
                return response;
            }

            response.createMessage(result, 200);
            return response;

        } catch (err){
            response.createMessage(err, 500);
            return response;
        }
        
    }
    
    public static async getCustomers() : Promise< AppResponse<Customers[]> > {
        const response : AppResponse<Customers[]> = new AppResponse();

        try {
            const cust_service : CustomersServiceGET = new CustomersServiceGET(new MySqlDatabaseConnection(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD)),
            results : Customers[] = await cust_service.getAll();

            if(results.length === 0){
                response.createMessage(null, 204);
                return response;
            }
            
            response.createMessage(results, 200);
            return response;

        } catch (err){
            response.createMessage(err, 500);
            return response;
        }

    }
}

export { CustomersController };