export class Base {
    protected id : number
    protected creationDate : Date;
    protected updateDate : Date;


    constructor(id : number, creationDate : Date, updateDate : Date){
        this.id = id;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
    }

    public getId(){
        return this.id;
    }

    public setId(newId : number){
        this.id = newId;
    }

    public getCreationdate(){
        return this.creationDate;
    }

    public getUpdateDate(){
        return this.updateDate;
    }

    
}