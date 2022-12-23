import { CustomersService } from "../services/CustomersService.js";
import { AppResponse } from "../models/AppResponse.js";
import { MySqlDatabaseConnection } from "../services/MySqlDatabaseConnection.js";
import dotenv from 'dotenv';
dotenv.config();

class CustomersController {
    public static getCustomer(cust_name? : string) : AppResponse {
        //const cust_service : CustomersService = new CustomersService();
        return;
    }
    public static async getCustomers() : Promise<AppResponse> {
        const response : AppResponse = new AppResponse();
        try {
            const db_connection : MySqlDatabaseConnection = new MySqlDatabaseConnection(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);
            const cust_service : CustomersService = new CustomersService(db_connection);
            
            db_connection.connect();
            response.createMessage(await cust_service.getAll(), 200);
            db_connection.close();
            return response;

        } catch (err){
            response.createMessage(err, 500);
            return response;
        }

    }
}

export { CustomersController };