class AppResponse <T>{
    private _data : T;
    private _statusCode : number;

    public get data() : T{
        return this._data;
    }
    public get statusCode() : number {
        return this._statusCode;
    }
    
    createMessage(msg : T, code: number) : void {
        this._data = msg;
        this._statusCode = code;
    }

}

export { AppResponse };