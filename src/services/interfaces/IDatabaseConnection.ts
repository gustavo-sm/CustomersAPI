export interface IDatabaseConnection <TConnection, TPromise> {
    db_connection : TConnection;
    connect(db_host : string, db_name : string, db_username : string, db_password : string) : void;
    query(query : string, conditions : string[]) : Promise<TPromise>;
    close() : void;
}