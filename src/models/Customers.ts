class Customers{
    private _id : number;
    private name : string;
    private color_calc: string;

    constructor(id: number, name: string, color_calc: string) {
        this._id = id;
        this.name = name;
        this.color_calc = color_calc;
    }
    public get id(){
        return this._id;
    }
}
export { Customers };