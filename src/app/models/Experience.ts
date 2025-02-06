import { Label } from "./Label";

export class Experience {
  id: number;
  title: string;
  duree: Label;
  domaines: string;
  competences: string;

  constructor(giventId: number, givenTitle: string, givenDuree: Label, givenDomaines: string, givenCompetences: string) {
    this.id = giventId;
    this.title = givenTitle;
    this.duree = givenDuree;
    this.domaines = givenDomaines;
    this.competences = givenCompetences;
  }
}