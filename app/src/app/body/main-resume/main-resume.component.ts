import { Component, EventEmitter, Output } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { Formation } from 'src/app/models/Formation';
import { Hobbie } from 'src/app/models/Hobbie';

@Component({
  selector: 'app-main-resume',
  templateUrl: './main-resume.component.html',
  styleUrls: ['./main-resume.component.css']
})
export class MainResumeComponent {
  @Output() displayDetail = new EventEmitter<number>();

  public experiences:Experience[] = [
    new Experience(
      1,
      "Emploi ARS Data - 2022/2023",
      "Durée : <b>1 an</b>",
      "Domaine d'expertise : Développement web, création <b>API fermée</b>, interconnexion d'applications",
      "Compétences : Sécurité, Devops, <b>ASP.NET</b>, TypeScript, MySQL, Angular, Versioning AzureDevops, UI/UX"),
    new Experience(
      2,
      "Emploi Association Jean Gailhac - 2021/2022",
      "Durée : <b>1 an</b>",
      "Domaine d'expertise : Développement \"From scratch\", création Application Web, <b>paiement en ligne</b>, Gestion des données utilisateurs",
      "Compétences : Autonomie, Organisation, <b>JQUERY/AJAX</b>, Javascript, php, MySQL, Wordpress, Versioning GitHub, Déploiement de solution open source"),
    new Experience(
      3,
      "Emploi entreprise Promété - 2021",
      "Durée : <b>2 mois</b>",
      "Domaine d'expertise : Développement Web, <b>maintenance Application Web</b>, Création de modules",
      "Compétences : Travail d'équipe, AHAH / AJAX, Javascript, php, <b>MySQL</b>, Drupal, GitLab"),
    new Experience(
      4,
      "Hackathon MMI-2020",
      "Durée : <b>1 semaine</b>",
      "Domaine d'expertise : <b>Communication</b> et Statistiques",
      "Compétences : Travail d'équipe, <b>UI/UX</b>, design général, recueil des besoins"),
    new Experience(
      5,
      "Marathon MMI-2020",
      "Durée : <b>1 semaine</b>",
      "Domaine d'expertise : <b>Développement web</b>, mise en place d'une boutique e-commerce administrable",
      "Compétences : <b>Déploiement CMS</b>, rédaction cahier des charges, Travail d'équipe, UI/UX"),
  ]
  public formations:Formation[] = [
    new Formation(
      "[À venir] Mastère Architecte logiciel - 2024/ Epitech",
      ""
    ),
    new Formation(
      "[En cours] License APSIO (Analyste Programmeur de Systèmes Informatiques Ouverts) - 2022/ IUT Blagnac",
      "Classement : 1/26, Moyenne générale : 16.56"
    ),
    new Formation(
      "DUT MMI (Métiers du Multimédia et de l'Internet) - 2020/ IUT Béziers",
      "Classement : 1/63, Moyenne générale : 17.30"
    ),
    new Formation(
      "BACCALAUREAT SCIENTIFIQUE - 2020/ Lycée Jules Fil Carcassonne",
      "Mention très bien, option science de l'ingénieur, spécialité physique-chimie"
    ),
    new Formation(
      "Prix de l'excellence - 2019/ Lycée Léonard de Vinci Antibes",
      "Décerné par le Rotary Club International"
    ),
    new Formation(
      "Concours d'éloquence - 2019/ Lycée Léonard de Vinci Antibes",
      "Concours en anglais, propre au lycée, Talks : \"The importance of choices\""
    ),
  ]
  public hobbies:Hobbie[] = [
    new Hobbie(
      "./assets/img/haltere_couleur.png",
      "Musculation : depuis 3 ans c'est un sport qui me passionne et qui me permet de repousser mes limites."
    ),
    new Hobbie(
      "./assets/img/cube.png",
      "Modélisation 3D : un mariage entre mathématique, créativité et informatique qui me plaît énormément."
    ),
    new Hobbie(
      "./assets/img/gear.png",
      "La mécanique automobile me passionne de part l’aspect technique et précis mais aussi par la satisfaction de connaître le fonctionnement d’un système."
    ),
  ]
  public setDetailVisible(idExperience:number){
    this.displayDetail.emit(idExperience);
  }
}
