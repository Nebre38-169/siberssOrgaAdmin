import { Base } from "../base/base";

export class Channel extends Base{
    public nom : string;
    public boquettes : string;
    
    constructor(
        id : number,
        creationDate : Date,
        updateDate : Date,
        nom : string,
        boquette : string
    ){
        super(id,creationDate,updateDate);
        this.nom = nom;
        this.boquettes = boquette;
    }

    public getBoquetteArr() : number[]{
        let boquetteAsString = this.boquettes.split(',');
        let result :number[] = [];
        for(let boquette of boquetteAsString){
            result.push(parseInt(boquette));
        }
        return result;
    }
}
