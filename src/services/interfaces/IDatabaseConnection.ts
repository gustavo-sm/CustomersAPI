export interface IDatabaseConnection <T> {
    db_host : string;
    db_name : string;
    db_username : string;
    db_password : string;
    db_connection : T;
    connect() : void;
    query(query : string, conditions : string[]) : Array<object>
    close() : void;
}