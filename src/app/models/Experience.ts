export class Experience{
  id:number;
  title:string;
  duree:string;
  domaines:string;
  competences:string;

  constructor(giventId:number, givenTitle:string, givenDuree:string, givenDomaines:string, givenCompetences:string) {
    this.id = giventId;  
    this.title = givenTitle;
    this.duree = givenDuree;
    this.domaines = givenDomaines;
    this.competences = givenCompetences;
    }
}