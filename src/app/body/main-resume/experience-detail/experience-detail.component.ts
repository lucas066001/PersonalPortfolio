import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Details } from 'src/app/models/Details';
import { Label } from 'src/app/models/Label';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent{

  private _idExp:number = 0;

  @Input("idExp")
  set idDetails(val:number){
    this._idExp = val;
    this.detail = this.getDetailByExperienceId(this._idExp);
  }

  @Output() hideDetail = new EventEmitter<number>();

  public detail:Details | undefined;

  private detailsList:Details[] = [
    new Details(
      1,
      "Développement d'une API fermée",
      "Les <b>APIs fermées</b> permettent le partage de données et/ou de <b>fonctionnalités internes</b> à une entreprise ou des développeurs (internes ou prestataires). Dans mon cas, l'objectif était de proposer une <u>source de données</u> pour les applications de nos clients sans que d'autres personnes puissent effectuer des requêtes. C'est donc par le biais d'un <b><u>token d'identification</u></b> que toutes les demandes sont validées avant d'être traitées. Une <i>optimisation côté application</i> a été mise en place pour permettre le <u>stockage en cache</u> et <b>limiter le nombre d'appels réseaux</b>. Ce fût une expérience très enrichissante.",
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]     
      ,[
        new Label("Batch","#7f08b7"),
        new Label("SQL Server","#a30cea"),
        new Label("Typescript - Angular", "#7f08b7"),
        new Label("C# - ASP.NET", "#a30cea"),
      ],
      [
        new Label("MVC","rgb(100, 82, 222)"),
        new Label("Architecture n-tiers","#3b26c2"),
        new Label("API REST", "rgb(100, 82, 222)")
      ]),
    new Details(
      2,
      "Développement et déploiement d'une application php",
      "Alternant dans une entreprise n'ayant pas de service informatique, j'ai mené à bien la mise en place d'une <b>application web</b> du début à la fin. Du <u>recueil des besoins</u> au serveur de <u>déploiement</u> en passant par la mise en place d'une solution de <u>versionning</u>, j'ai pu appréhender toutes les phases d'un projet de développement. La mise en place de <b>repository git, de hook, et de déploiement continu</b> m'a permis de prendre conscience de l'environnement dans lequel est exécuté le code que je développais. Ce qui aujourd'hui est un véritable atout dans ma vie professionnelle. ",
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]     
      ,[
        new Label("Php","#7f08b7"),
        new Label("MySQL","#a30cea"),
        new Label("Shell", "#7f08b7"),
      ],
      [
        new Label("Déploiement continu","rgb(100, 82, 222)"),
        new Label("Versionning","#3b26c2"),
        new Label("Paiement en ligne", "rgb(100, 82, 222)")
      ]
    ),
    new Details(
      3,
      "Gestion des données et optimisation de requêtes SQL",
      "Certaines entreprises receuillent des <b>quantités de données gigantesques</b>, Promété en fait partie car elle permet aux utilisateur de son <i>logiciel</i> d'acquérir et de visualiser leur propres <b>données météos</b>. Cependant, à un certain stade, les <u>bases de données relationnelles</u> ne sont plus optimales pour la gestion de telles quantités. C'est pourquoi en attendant une transition vers un autre modèle de stockage il fallait penser à <b>optimiser les requêtes d'accès aux données</b> pour limiter les temps de réponse. Cette expérience m'a fait prendre conscience de l'importance de la <u>sobriété numérique</u>. C'est n'est pas car une application paraît simpliste et tourne bien qu'il ne faut pas chercher à optimiser son fonctionnement. <u>Jointures</u>, <u>procédures stockées</u>, <u>unicité des données</u>, j'appréhende ces concepts avec une bien meilleure compréhension et un plus grand recul aujourd'hui.",
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]     
      ,[
        new Label("Drupal","#7f08b7"),
        new Label("Javascript","#a30cea"),
        new Label("Php", "#7f08b7"),
      ],
      [
        new Label("AJAX","rgb(100, 82, 222)"),
        new Label("Data optimisation","#3b26c2")
      ]
    ),
    new Details(
      4,
      "Oups, pas encore de détail sur cette fiche, revenez plus tard",
      "",
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]     
      ,undefined,
      undefined
    ),
    new Details(
      5,
      "Oups, pas encore de détail sur cette fiche, revenez plus tard",
      "",
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]     
      ,undefined,
      undefined
    )
  ];

  private getDetailByExperienceId(id:number):Details{
    let detailFound:Details = new Details(0, "Une erreur est survenue","",[], [], []);

    this.detailsList.forEach(detail => {
      if(detail.idExperience == id){
        detailFound = detail;
      }
    });
    return detailFound;
  }

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'noScroll');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'noScroll');
  }

  public setDetailHidden():void{
    this.hideDetail.emit();
  }
}
