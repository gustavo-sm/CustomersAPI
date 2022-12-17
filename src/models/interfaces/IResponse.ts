export interface IResponse {
    message : string;
    statusCode : number;
    createMessage(msg : string, code: number) : void;
}