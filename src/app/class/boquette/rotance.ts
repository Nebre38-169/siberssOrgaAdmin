import { Base } from "../base/base";
import { Boquette } from "./boquette";

export class Rotance extends Base{
    public boquette : Boquette;
    public lieu : string;
    public info : string;
    public date : Date;
    public commencer : boolean;
    public fini : boolean;

    constructor(
        id : number,
        creationDate : Date,
        updateDate : Date,
        boquette : Boquette,
        lieu : string,
        info : string,
        date : Date,
        commencer : string,
        fini : string,
    ){
        super(id,creationDate,updateDate);
        this.boquette = boquette;
        this.lieu = lieu;
        this.info = info;
        this.date = date;
        this.commencer = (commencer==='Y');
        this.fini = (fini==='Y');
    }
}
