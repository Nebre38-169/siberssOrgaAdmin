import { Base } from "../base/base";

export class Boquette extends Base{
    public name : string;
    public respo : string;
    public description : string;
    public role : string;

    constructor(
        id : number,
        creationDate : Date,
        updateDate : Date,
        name : string,
        respo : string,
        description : string,
        role : string
    ){
        super(id,creationDate,updateDate);
        this.name = name;
        this.respo = respo;
        this.description = description;
        this.role = role;
    }

    public setCreationDate(newDate : Date){
        this.creationDate = newDate;
    }

    public setUpdateDate(newDate : Date){
        this.updateDate = newDate;
    }
}
