class Customers{
    private id : number;
    private name : string;
    private color_calc: string;

    constructor(id: number, name: string, color_calc: string) {
        this.id = id;
        this.name = name;
        this.color_calc = color_calc;
    }
}
export { Customers };