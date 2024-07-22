export class ToolCompetence{
    title:string;
    percentage:number;
    iconPath:string;

    constructor(givenTooltitle:string, givenPercentage:number, givenIconPath:string) {
        this.title = givenTooltitle;
        this.percentage = givenPercentage;
        this.iconPath = givenIconPath;
      }
}