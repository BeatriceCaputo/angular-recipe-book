import { StringDecoder } from "string_decoder";

export class Recipe {
    public name : string;
    public description : string;
    public imagePath : string;

    constructor (name:string, desc:string, imagePath:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }

    getName():string{
        return this.name;
    }
    getDescription():string{
        return this.description;
    }
    getImagePath():string{
        return this.imagePath;
    }
}