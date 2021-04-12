import { Base } from "../base/base";
import { Boquette } from "../boquette/boquette";

export class Posts extends Base{
    public channel : number;
    public titre : string;
    public message :string;
    public auteur : Boquette;
    
    constructor(
        id : number,
        creationDate : Date,
        updateDate : Date,
        titre : string,
        message : string,
        auteur : Boquette
    ){
        super(id,creationDate,updateDate);
        this.auteur = auteur;
        this.titre = titre;
        this.message = message;
    }
}
