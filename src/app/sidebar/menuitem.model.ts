export class MenuItem{
    public id:number;
    public name:string;
    public level:number;
    public parent:string;
    public link?:string;
    public icon:string;
    public children:MenuItem[];

    constructor(id:number, name:string, level:number, parent:string, icon:string, children:MenuItem[], link?:string){
        this.id = id;
        this.name = name;
        this.level = level;
        this.parent = parent;
        this.link = link;
        this.icon = icon;
        this.children = children;
    }
}
