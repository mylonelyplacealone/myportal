export class Chapter{
    public parentlinkname: String;
    public heading: String;
    public details:String;
    
    constructor(parentlinkname:string, heading:string,details:string){
        this.parentlinkname  = parentlinkname;
        this.heading  = heading;
        this.details  = details;
    }
}