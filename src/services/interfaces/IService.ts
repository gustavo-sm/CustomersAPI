export interface IServiceGET <ModelT> {
    getAll(): Promise<ModelT[]>;
    getByName(cust_name: string): Promise<ModelT>;
}

export interface IServicePOST <ModelT> {
    create(model : ModelT): Promise<ModelT>;
}