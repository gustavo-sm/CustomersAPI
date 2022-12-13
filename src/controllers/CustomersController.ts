class CustomersController {
    public static getCustomers(cust_id? : string) : string {
        return `${cust_id} -> param`;
    }
}

export { CustomersController };