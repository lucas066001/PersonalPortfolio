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

  public experiences: Experience[] = [
    new Experience(
      6,
      $localize`Emploi General Electric (GE Vernova) - 2023/2025`,
      $localize`Durée : <b>2 ans</b>`,
      $localize`Domaine d'expertise : Microservices, automatisation, client lourd, architecture logiciel, communication haute performance / disponibilité`,
      $localize`Compétences : Devops, Benchmarking, <b>C#</b>/ASP.NET/WPF, C++, TypeScript, <b>MQTT</b>, <b>GRPC</b>, ElastciSearch, Angular`),
    new Experience(
      5,
      $localize`Emploi ARS Data - 2022/2023`,
      $localize`Durée : <b>1 an</b>`,
      $localize`Domaine d'expertise : Développement web, création <b>API fermée</b>, interconnexion d'applications`,
      $localize`Compétences : Sécurité, Devops, <b>ASP.NET</b>, TypeScript, MySQL, Angular, Versioning AzureDevops, UI/UX`),
    new Experience(
      4,
      $localize`Emploi Association Jean Gailhac - 2021/2022`,
      $localize`Durée : <b>1 an</b>`,
      $localize`Domaine d'expertise : Développement \"From scratch\", création Application Web, <b>paiement en ligne</b>, Gestion des données utilisateurs`,
      $localize`Compétences : Autonomie, Organisation, <b>JQUERY/AJAX</b>, Javascript, php, MySQL, Wordpress, Versioning GitHub, Déploiement de solution open source`),
    new Experience(
      3,
      $localize`Emploi entreprise Promété - 2021`,
      $localize`Durée : <b>2 mois</b>`,
      $localize`Domaine d'expertise : Développement Web, <b>maintenance Application Web</b>, Création de modules`,
      $localize`Compétences : Travail d'équipe, AHAH / AJAX, Javascript, php, <b>MySQL</b>, Drupal, GitLab`),
    new Experience(
      2,
      $localize`Hackathon MMI-2020`,
      $localize`Durée : <b>1 semaine</b>`,
      $localize`Domaine d'expertise : <b>Communication</b> et Statistiques`,
      $localize`Compétences : Travail d'équipe, <b>UI/UX</b>, design général, recueil des besoins`),
    new Experience(
      1,
      $localize`Marathon MMI-2020`,
      $localize`Durée : <b>1 semaine</b>`,
      $localize`Domaine d'expertise : <b>Développement web</b>, mise en place d'une boutique e-commerce administrable`,
      $localize`Compétences : <b>Déploiement CMS</b>, rédaction cahier des charges, Travail d'équipe, UI/UX`),
  ]
  public formations: Formation[] = [
    new Formation(
      $localize`[En cours] Mastère Architecte logiciel - 2024/ Epitech`,
      ""
    ),
    new Formation(
      $localize`License APSIO (Analyste Programmeur de Systèmes Informatiques Ouverts) - 2022/ IUT Blagnac`,
      $localize`Classement : 1/26, Moyenne générale : 16.56`
    ),
    new Formation(
      $localize`DUT MMI (Métiers du Multimédia et de l'Internet) - 2020/ IUT Béziers`,
      $localize`Classement : 1/63, Moyenne générale : 17.30`
    ),
    new Formation(
      $localize`BACCALAUREAT SCIENTIFIQUE - 2020/ Lycée Jules Fil Carcassonne`,
      $localize`Mention très bien, option science de l'ingénieur, spécialité physique-chimie`
    ),
    new Formation(
      $localize`Prix de l'excellence - 2019/ Lycée Léonard de Vinci Antibes`,
      $localize`Décerné par le Rotary Club International`
    ),
    new Formation(
      $localize`Concours d'éloquence - 2019/ Lycée Léonard de Vinci Antibes`,
      $localize`Concours en anglais, propre au lycée, Talks : \"The importance of choices\"`
    ),
  ]
  public hobbies: Hobbie[] = [
    new Hobbie(
      "assets/img/haltere_couleur.png",
      $localize`Musculation : depuis 3 ans c'est un sport qui me passionne et qui me permet de repousser mes limites.`
    ),
    new Hobbie(
      "assets/img/cube.png",
      $localize`Modélisation 3D : un mariage entre mathématique, créativité et informatique qui me plaît énormément.`
    ),
    new Hobbie(
      "assets/img/gear.png",
      $localize`La mécanique automobile me passionne de part l’aspect technique et précis mais aussi par la satisfaction de connaître le fonctionnement d’un système.`
    ),
  ]
  public setDetailVisible(idExperience: number) {
    this.displayDetail.emit(idExperience);
  }
}
