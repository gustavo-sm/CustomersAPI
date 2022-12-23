import { CustomersService } from "../services/CustomersService.js";
import { AppResponse } from "../models/AppResponse.js";


class CustomersController {
    public static getCustomer(cust_name? : string) : AppResponse {
        //const cust_service : CustomersService = new CustomersService();
        return;
    }
    public static async getCustomers() : Promise<AppResponse> {
        const response : AppResponse = new AppResponse();

        try {
            const cust_service : CustomersService = new CustomersService();
            response.createMessage(await cust_service.getAll(), 200);
            return response;

        } catch (err){
            response.createMessage(err, 500);
            return response;
        }

    }
}

export { CustomersController };