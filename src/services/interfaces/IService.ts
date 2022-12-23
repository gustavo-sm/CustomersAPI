export interface IService <ModelT>{
    getAll(): Promise<ModelT[]>;
    getById(id: number): Promise<ModelT[]>;
}