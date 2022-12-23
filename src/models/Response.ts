class AppResponse {
    private _data : Object;
    private _statusCode : number;

    public get data() : Object{
        return this._data;
    }
    public get statusCode() : number {
        return this._statusCode;
    }
    
    createMessage(msg : Object, code: number) : void {
        this._data = msg;
        this._statusCode = code;
    }

}

export { AppResponse };