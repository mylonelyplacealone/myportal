export class MenuItem{
    public name:string;
    public level:number;
    public link?:string;
    public children:MenuItem[];

    constructor(name:string, level:number, children:MenuItem[], link?:string){
        this.name = name;
        this.level = level;
        this.link = link;
        this.children = children;
    }
}
