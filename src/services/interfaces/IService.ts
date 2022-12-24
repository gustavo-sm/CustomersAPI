export interface IService <ModelT>{
    getAll(): Promise<ModelT[]>;
    getByName(cust_name: string): Promise<ModelT>;
}