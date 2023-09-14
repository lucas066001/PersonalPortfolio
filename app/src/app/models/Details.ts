import { Label } from "./Label";

export class Details{
    idExperience:number;
    title:string;
    description:string;
    imgsSrc:string[];
    langages:Label[] | undefined;
    concepts:Label[] | undefined;

    constructor(givenidExperience:number, givenTitle:string, givenDescription:string, givenImgsSrc:string[], givenLangages:Label[] | undefined, givenConcepts:Label[] | undefined) {
        this.idExperience = givenidExperience;
        this.title = givenTitle;
        this.description = givenDescription;
        this.imgsSrc = givenImgsSrc;
        this.langages = givenLangages;
        this.concepts = givenConcepts;
      }
}