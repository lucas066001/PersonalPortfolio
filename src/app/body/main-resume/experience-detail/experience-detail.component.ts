import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Details } from 'src/app/models/Details';
import { Label } from 'src/app/models/Label';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent {

  private _idExp: number = 0;

  @Input("idExp")
  set idDetails(val: number) {
    this._idExp = val;
    this.detail = this.getDetailByExperienceId(this._idExp);
  }

  @Output() hideDetail = new EventEmitter<number>();

  public detail: Details | undefined;

  private detailsList: Details[] = [
    new Details(
      8,
      $localize`Segmentation de CT scan pour localiser tumeur et métastases ovariens`,
      $localize`
      <strong><u>Segmentation de CT Scan – Hackathon PinkCC (Top 4)</u></strong><br>
      <em>Imagerie médicale 3D, Deep Learning, travail en équipe international</em><br>
      Participation à un hackathon de haut niveau autour de la <strong>segmentation d’images médicales 3D (CT scan)</strong> pour détecter tumeurs et métastases ovariennes. 
      En équipe avec deux étudiants de Stanford et un collègue d’Epitech, nous avons conçu une pipeline complète combinant <strong>réseaux de neurones convolutifs 3D</strong> 
      (<code>nnU-Net</code>), <strong>radiomics</strong> et <strong>analyse de régions d’intérêt</strong> sur des volumes complexes. 
      Expérience approfondie en <strong>prétraitement 3D</strong>, manipulation de <code>DICOM</code>/<code>NIfTI</code>, et en <strong>modélisation par apprentissage profond</strong> sur données médicales réelles.  
      <br>
      Face à des équipes de haut niveau (EPFL, chercheurs en oncologie), nous avons obtenu la <strong>4<sup>e</sup> place</strong> du classement.
      Co-lead technique sur l’architecture du modèle tout en co-gérant un second hackathon en parallèle (WaterScarcity Challenge).
      <br>
      <b>Compétences clés :</b> <code>Deep Learning</code>, <code>nnUNet</code>, <code>Radiomics</code>, <code>3D CNN</code>, <code>NIfTI</code>, <code>Python</code>, <code>Imagerie Médicale</code>, <code>Leadership</code>`,
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]
      , [
        new Label("Python", "#7f08b7"),
        new Label("Numpy | Panda", "#a30cea"),
        new Label("nnUNet", "#7f08b7"),
        new Label("Tensorflow", "#a30cea"),
      ],
      [
        new Label($localize`Manipulation de données biomédicales`, "rgb(100, 82, 222)"),
        new Label($localize`Analyse d'image 3D`, "#3b26c2"),
        new Label($localize`Accès à distance et file d'attentes batch`, "rgb(100, 82, 222)"),
      ]),
    new Details(
      7,
      $localize`Prédictions de flux d'eau`,
      $localize`
      <strong><u>Phase 1 - Hackathon WaterScarcity – Prédiction de flux d’eau</u></strong><br>
      <em>Analyse de séries temporelles, modélisation hydrologique</em><br>
      Participation à un projet de <strong>modélisation prédictive du débit d’eau</strong> en milieu hydrologique à partir de <strong>données météorologiques et de sols</strong> multi-sources. 
      Mise en œuvre de pipelines de <strong>prétraitement avancé</strong> (lag features, enrichissement spatial, gestion de données statiques/dynamiques), 
      construction d’<strong>index sur mesure</strong> (ex : <code>SnowIndex</code> combinant altitude, température et précipitations), 
      et utilisation de <strong>techniques de réduction de dimensionnalité</strong> (<code>PCA</code>) sur variables pédologiques.
      Exploration de modèles de <strong>régression probabiliste par forêts quantiles (<code>QRF</code>)</strong> pour générer des intervalles de prédiction.
      Enrichissement par l’utilisation de modèles tels que <code>GaussianProcessRegressor</code> et <code>GradientBoosting</code> avec calibration des intervalles de confiance.
      <br>    

      <strong><u>Phase 2 - Hackathon "Gestion de l'eau & Conception de politiques publiques"</u></strong><br>
      Participation à un challenge de 3 jours axé sur la <strong>modélisation et l’optimisation de politiques de gestion de l’eau</strong> à l’aide d’une simulation. 
      Conception d’un mécanisme complet intégrant <strong>quotas, incitations et réponse adaptative aux crises</strong>, fondé sur une modélisation comportementale des acteurs du système. 
      Mise en œuvre d’un <strong>algorithme évolutionnaire</strong> pour l’optimisation multi-paramètres, intégrant <strong>arbitrage multi-objectifs</strong> (impact économique vs écologique) 
      et <strong>respect de contraintes</strong> (priorité d’accès à l’eau). 
      Élaboration de stratégies décisionnelles explicables via des <strong>heuristiques interprétables</strong> et ajustement fin des <strong>systèmes d’amendes et de subventions</strong> pour favoriser l’apprentissage des acteurs. 
    `,
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]
      , [
        new Label("Python", "#7f08b7"),
        new Label("Scikit-learn", "#a30cea"),
        new Label("Numpy | Panda", "#7f08b7"),
        new Label("Jupyter notebooks", "#a30cea"),
      ],
      [
        new Label($localize`Série temporelles`, "rgb(100, 82, 222)"),
        new Label($localize`Réduction dimensionnelle`, "#3b26c2"),
        new Label($localize`Clustering et aggrégation de données`, "rgb(100, 82, 222)"),
        new Label($localize`Algorithme d'optimisation d'apprentissage`, "#3b26c2"),
        new Label($localize`Modèles d'apprentissage ouvert`, "rgb(100, 82, 222)"),
      ]),
    new Details(
      6,
      $localize`Recherche et développement autour d'une solution d'acquisition de données`,
      $localize`Les <b>microservices</b> sont une architecture logicielle qui permet de découper une application en plusieurs services indépendants. Cela permet de <u>faciliter la maintenance</u>, <u>l'évolutivité</u> et <u>la réutilisation</u> de ces services. Dans le cadre de mon travail chez General Electric, j'ai eu l'opportunité de travailler sur un projet de <b>recherche et développement</b> autour de la mise en place d'une solution d'acquisition de données. Cela a été l'occasion de mettre en place des <u>benchmarks</u> pour comparer les performances de ce type de solution dans des conditions précises. Afin d'atteindre des objectifs de <u>haute performance</u> et de <u>disponibilité</u> j'ai travailler sur des problématiques de <b>répartitions des charges</b>, de <b>scalabilité</b>, de gestion des états, le tout dans un contexte de <i>développement à grande échelle</i> avec la volonté de produire du code <u>maintenable, évolutif et robuste</u>. Cela a été une expérience très enrichissante qui m'a permis de travailler sur des problématiques très pointues.`,
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]
      , [
        new Label("Groovy / Java", "#7f08b7"),
        new Label("C++", "#a30cea"),
        new Label("Typescript - Angular", "#7f08b7"),
        new Label("C# - ASP.NET - WPF", "#a30cea"),
      ],
      [
        new Label("MQTT - Pub/Sub scalability", "rgb(100, 82, 222)"),
        new Label(`GRPC - Full duplex stream`, "#3b26c2"),
        new Label("Microservices", "rgb(100, 82, 222)"),
      ]),
    new Details(
      5,
      $localize`Développement d'une API fermée`,
      $localize`Les <b>APIs fermées</b> permettent le partage de données et/ou de <b>fonctionnalités internes</b> à une entreprise ou des développeurs (internes ou prestataires). Dans mon cas, l'objectif était de proposer une <u>source de données</u> pour les applications de nos clients sans que d'autres personnes puissent effectuer des requêtes. C'est donc par le biais d'un <b><u>token d'identification</u></b> que toutes les demandes sont validées avant d'être traitées. Une <i>optimisation côté application</i> a été mise en place pour permettre le <u>stockage en cache</u> et <b>limiter le nombre d'appels réseaux</b>. Ce fût une expérience très enrichissante.`,
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]
      , [
        new Label("Batch", "#7f08b7"),
        new Label("SQL Server", "#a30cea"),
        new Label("Typescript - Angular", "#7f08b7"),
        new Label("C# - ASP.NET", "#a30cea"),
      ],
      [
        new Label("MVC", "rgb(100, 82, 222)"),
        new Label($localize`Architecture n-tiers`, "#3b26c2"),
        new Label("API REST", "rgb(100, 82, 222)")
      ]),
    new Details(
      4,
      $localize`Développement et déploiement d'une application php`,
      $localize`Alternant dans une entreprise n'ayant pas de service informatique, j'ai mené à bien la mise en place d'une <b>application web</b> du début à la fin. Du <u>recueil des besoins</u> au serveur de <u>déploiement</u> en passant par la mise en place d'une solution de <u>versionning</u>, j'ai pu appréhender toutes les phases d'un projet de développement. La mise en place de <b>repository git, de hook, et de déploiement continu</b> m'a permis de prendre conscience de l'environnement dans lequel est exécuté le code que je développais. Ce qui aujourd'hui est un véritable atout dans ma vie professionnelle.`,
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]
      , [
        new Label("Php", "#7f08b7"),
        new Label("MySQL", "#a30cea"),
        new Label("Shell", "#7f08b7"),
      ],
      [
        new Label($localize`Déploiement continu`, "rgb(100, 82, 222)"),
        new Label("Versionning", "#3b26c2"),
        new Label($localize`Paiement en ligne`, "rgb(100, 82, 222)")
      ]
    ),
    new Details(
      3,
      $localize`Gestion des données et optimisation de requêtes SQL`,
      $localize`Certaines entreprises receuillent des <b>quantités de données gigantesques</b>, Promété en fait partie car elle permet aux utilisateur de son <i>logiciel</i> d'acquérir et de visualiser leur propres <b>données météos</b>. Cependant, à un certain stade, les <u>bases de données relationnelles</u> ne sont plus optimales pour la gestion de telles quantités. C'est pourquoi en attendant une transition vers un autre modèle de stockage il fallait penser à <b>optimiser les requêtes d'accès aux données</b> pour limiter les temps de réponse. Cette expérience m'a fait prendre conscience de l'importance de la <u>sobriété numérique</u>. C'est n'est pas car une application paraît simpliste et tourne bien qu'il ne faut pas chercher à optimiser son fonctionnement. <u>Jointures</u>, <u>procédures stockées</u>, <u>unicité des données</u>, j'appréhende ces concepts avec une bien meilleure compréhension et un plus grand recul aujourd'hui.`,
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]
      , [
        new Label("Drupal", "#7f08b7"),
        new Label("Javascript", "#a30cea"),
        new Label("Php", "#7f08b7"),
      ],
      [
        new Label("AJAX", "rgb(100, 82, 222)"),
        new Label($localize`Data optimisation`, "#3b26c2")
      ]
    ),
    new Details(
      2,
      $localize`Oups, pas encore de détail sur cette fiche, revenez plus tard`,
      "",
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]
      , undefined,
      undefined
    ),
    new Details(
      1,
      $localize`Oups, pas encore de détail sur cette fiche, revenez plus tard`,
      "",
      [
        "Url",
        "Url",
        "Url",
        "Url",
      ]
      , undefined,
      undefined
    )
  ];

  private getDetailByExperienceId(id: number): Details {
    let detailFound: Details = new Details(0, "Une erreur est survenue", "", [], [], []);

    this.detailsList.forEach(detail => {
      console.log(detail.idExperience);
      if (detail.idExperience == id) {
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

  public setDetailHidden(): void {
    this.hideDetail.emit();
  }
}
