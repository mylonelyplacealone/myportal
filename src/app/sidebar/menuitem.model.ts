export class MenuItem{
    public name:string;
    public level:number;
    public parent:string;
    public link?:string;
    public icon:string;
    public children:MenuItem[];

    constructor(name:string, level:number, parent:string, icon:string, children:MenuItem[], link?:string){
        this.name = name;
        this.level = level;
        this.parent = parent;
        this.link = link;
        this.icon = icon;
        this.children = children;
    }
}
