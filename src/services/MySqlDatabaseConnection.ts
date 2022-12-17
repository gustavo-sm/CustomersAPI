import { IDatabaseConnection } from "./interfaces/IDatabaseConnection";

import * as mysql from "mysql2";
import { RowDataPacket } from "mysql2";  

class MySqlDatabaseConnection implements IDatabaseConnection <mysql.Connection, RowDataPacket[]> {
    private _db_host : string;
    private _db_name : string;
    private _db_username : string;
    private _db_password : string;
    private _db_connection : mysql.Connection;

    constructor(db_host : string, db_name : string, db_username : string, db_password : string){
        this._db_host = db_host;
        this._db_name = db_name;
        this._db_username = db_username;
        this._db_password = db_password;
    }

    public connect() : void {
        try{
            this._db_connection = mysql.createConnection({
                host: this._db_host,
                user: this._db_username,
                password: this._db_password,
                database: this._db_name
            });
        }
        catch(err){
            throw new Error(err);
        }

    }

    public async query(query : string, conditions : string[]) : Promise<RowDataPacket[]> {
         
        return new Promise((resolve, reject) => {
            this._db_connection.query<RowDataPacket[]>(query, (err, res) => {
              if (err) 
                reject(err);
              else 
                resolve(res);
            })
          });
    }
    
    public close() : void {
        this._db_connection.end();
    }

    public get db_host(){
        return this._db_host;
    }

    public get db_name(){
        return this._db_name;
    }

    public get db_username(){ 
        return this._db_username;
    }

    public get db_password(){ 
        return this._db_password;
    }

    public get db_connection(){
        return this._db_connection;
    }
}


export { MySqlDatabaseConnection };