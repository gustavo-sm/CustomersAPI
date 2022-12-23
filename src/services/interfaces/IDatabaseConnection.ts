export interface IDatabaseConnection <ConnectionT, PromiseT> {
    db_connection : ConnectionT;
    connect() : void;
    query(query : string, conditions : string[]) : Promise<PromiseT>;
    close() : void;
}