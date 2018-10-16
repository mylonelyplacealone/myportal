export class MenuItem{
    public name:string;
    public level:number;
    public children:MenuItem[];

    constructor(name:string, level:number, children:MenuItem[]){
        this.name = name;
        this.level = level;
        this.children = children;
    }
}
