import * as mysql  from "mysql2";
import { IDatabaseConnection } from "./interfaces/IDatabaseConnection";


class MySqlDatabaseConnection implements IDatabaseConnection <mysql.Connection, mysql.RowDataPacket[]> {
    private _db_host : string;
    private _db_name : string;
    private _db_username : string;
    private _db_password : string;
    private _db_connection : mysql.Connection;

    constructor(){
        this._db_host = '';
        this._db_name = '';
        this._db_username = '';
        this._db_password = '';
    }

    public connect(db_host : string, db_name : string, db_username : string, db_password : string) : void {
        try{

            this._db_host = db_host;
            this._db_name = db_name;
            this._db_username = db_username;
            this._db_password = db_password;
            
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

    public async query(query : string, conditions : string[]) : Promise<mysql.RowDataPacket[]> {
         
        return new Promise((resolve, reject) => {
            this._db_connection.query<mysql.RowDataPacket[]>(query, (err, res) => {
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


    public get db_connection(){
        return this._db_connection;
    }
}


export { MySqlDatabaseConnection };