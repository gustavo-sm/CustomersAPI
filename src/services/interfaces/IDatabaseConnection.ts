import { Connection } from "mysql";

export interface IDatabaseConnection {
    db_host : string;
    db_name : string;
    db_username : string;
    db_password : string;
    db_connection : Connection;
    connect() : void;
    query(query : string, conditions : string[]) : Array<object>
    close() : void;

}