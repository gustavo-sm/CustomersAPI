import { IResponse } from "./interfaces/IResponse";

class Response implements IResponse {
    private _message : string;
    private _statusCode : number;
    constructor() {
        this._message = '';
        this._statusCode = 0;
    }

    public get message() : string{
        return this._message;
    }
    public get statusCode() : number {
        return this._statusCode;
    }
    
    createMessage(msg : string, code: number) : void {
        this._message = msg;
        this._statusCode = code;
    }

}

export { Response };