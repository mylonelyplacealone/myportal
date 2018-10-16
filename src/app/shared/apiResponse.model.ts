export class APIResponse{
    public result: boolean;
    public message:string;
    public data:any;
    
    constructor(data){
        // console.log(data);
        this.result  = data.result;
        this.message  = data.message;
        this.data  = data.data;
    }
}