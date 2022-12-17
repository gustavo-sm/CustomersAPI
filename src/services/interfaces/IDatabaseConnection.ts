export interface IDatabaseConnection <TConnection, TPromise> {
    db_host : string;
    db_name : string;
    db_username : string;
    db_password : string;
    db_connection : TConnection;
    connect() : void;
    query(query : string, conditions : string[]) : Promise<TPromise>;
    close() : void;
}