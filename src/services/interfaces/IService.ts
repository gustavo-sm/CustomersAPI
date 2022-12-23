export interface IService <DatabaseT, ModelT>{
    db_interface : DatabaseT;
    getAll(): Promise<ModelT[]>;
    getById(id: number): Promise<ModelT[]>;
}