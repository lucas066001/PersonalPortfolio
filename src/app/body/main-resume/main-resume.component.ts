import { Component, EventEmitter, Output } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { Formation } from 'src/app/models/Formation';
import { Hobbie } from 'src/app/models/Hobbie';
import { Label } from 'src/app/models/Label';

@Component({
  selector: 'app-main-resume',
  templateUrl: './main-resume.component.html',
  styleUrls: ['./main-resume.component.css']
})
export class MainResumeComponent {
  @Output() displayDetail = new EventEmitter<number>();

  public experiences: Experience[] = [
  new Experience(
      8,
      $localize` Pinkcc.Challenge (SIRIC Montpellier Cancer) - avril 2025`,
      new Label($localize`3 mois`, "#7466d3"),
      $localize`Domaine d'expertise :  Analyse d'images, vision par ordinateur, CNN, Unet, radiomics`,
      $localize`Compétences : Developper un modèle de segmentation d'image tri-dimensionelle pour assister la détection de tumeur et méthastases.`),  
  new Experience(
    7,
    $localize`WaterScarcity.Hackathon (Capgemini) - mai 2025`,
    new Label($localize`4 mois`, "#7466d3"),
    $localize`Domaine d'expertise : Analyse de séries temporelles, arbres de décisions, visualisation de données `,
    $localize`Compétences : Developper un modèle pour prédire les débits d'eau sur plusieurs rivières et bassins basé sur des données statiques spatio-temporelle et historiques de capteurs.`),  
  new Experience(
      6,
      $localize`Emploi General Electric (GE Vernova) - 2023/2025`,
      new Label($localize`2 ans`, "#a30cea"),
      $localize`Domaine d'expertise : Microservices, automatisation, client lourd, architecture logiciel, communication haute performance / disponibilité`,
      $localize`Compétences : Devops, Benchmarking, <b>C#</b>/ASP.NET/WPF, C++, TypeScript, <b>MQTT</b>, <b>GRPC</b>, ElastciSearch, Angular`),
    new Experience(
      5,
      $localize`Emploi ARS Data - 2022/2023`,
      new Label($localize`1 an`, "#a30cea"),
      $localize`Domaine d'expertise : Développement web, création <b>API fermée</b>, interconnexion d'applications`,
      $localize`Compétences : Sécurité, Devops, <b>ASP.NET</b>, TypeScript, MySQL, Angular, Versioning AzureDevops, UI/UX`),
    new Experience(
      4,
      $localize`Emploi Association Jean Gailhac - 2021/2022`,
      new Label($localize`1 an`, "#a30cea"),
      $localize`Domaine d'expertise : Développement \"From scratch\", création Application Web, <b>paiement en ligne</b>, Gestion des données utilisateurs`,
      $localize`Compétences : Autonomie, Organisation, <b>JQUERY/AJAX</b>, Javascript, php, MySQL, Wordpress, Versioning GitHub, Déploiement de solution open source`),
    new Experience(
      3,
      $localize`Emploi entreprise Promété - 2021`,
      new Label($localize`2 mois`, "#7466d3"),
      $localize`Domaine d'expertise : Développement Web, <b>maintenance Application Web</b>, Création de modules`,
      $localize`Compétences : Travail d'équipe, AHAH / AJAX, Javascript, php, <b>MySQL</b>, Drupal, GitLab`),
    new Experience(
      2,
      $localize`Hackathon MMI-2020`,
      new Label($localize`1 semaine`, "#7466d3"),
      $localize`Domaine d'expertise : <b>Communication</b> et Statistiques`,
      $localize`Compétences : Travail d'équipe, <b>UI/UX</b>, design général, recueil des besoins`),
    new Experience(
      1,
      $localize`Marathon MMI-2020`,
      new Label($localize`1 semaine`, "#7466d3"),
      $localize`Domaine d'expertise : <b>Développement web</b>, mise en place d'une boutique e-commerce administrable`,
      $localize`Compétences : <b>Déploiement CMS</b>, rédaction cahier des charges, Travail d'équipe, UI/UX`),
  ]
  public formations: Formation[] = [
    new Formation(
      $localize` Machine learning in Python with scikit-learn - 2024/ France Université Numérique`,
      $localize`Accédez au token de certification <a target=\"_blank\" href=\"https://openbadgefactory.com/v1/assertion/db2ebffb91aa1e64c27090cf3feaf3e99dad3700\">en cliquant ici</a>`
    ),
    new Formation(
      $localize`Mastère Architecte logiciel - 2024/ Epitech`,
      $localize`Classement : 1/41, GPA : A+`
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
