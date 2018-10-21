export class MenuItem{
    public name:string;
    public level:number;
    public link?:string;
    public icon:string;
    public children:MenuItem[];

    constructor(name:string, level:number, children:MenuItem[], icon:string, link?:string){
        this.name = name;
        this.level = level;
        this.link = link;
        this.icon = icon;
        this.children = children;
    }
}
