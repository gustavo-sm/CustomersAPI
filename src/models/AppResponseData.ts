class AppResponseData {
    private response_object : Object;
    constructor(response_obj : Object){
        this.response_object = response_obj;
    }

    public get responseObj() : Object{
        return this.response_object;
    }
}

export { AppResponseData }