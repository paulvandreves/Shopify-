export class Recipe {
    public name: string; // name : is standard for assigning property types in typescript
    public description: string; 
    public imagePath: string; 

    constructor(name: string, desc: string, imagePath: string ){
        this.name = name; 
        this.description = desc; 
        this.imagePath = imagePath; 
    }
}