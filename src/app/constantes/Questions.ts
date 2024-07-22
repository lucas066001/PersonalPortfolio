
export abstract class Questions{
    static CORRESPONDING_ANSWER: Map<string, string> = new Map<string, string>([
        ['es-tudisponible?','Tout à fait, je suis d\'ailleurs en recherche d\'une alternance pour intégrer un master à l\'école Epitech sur Montpellier. Si vous êtes une entreprise intéressée, n\'hésitez pas à demander mes coordonnées avec la question : Comment te contacter ?'],
        ['quelssonttesprojets?','Je souhaite acquérir un master en développement et architecture logiciel afin de trouver un post dans ces domaines. À l\'heure actuelle je ne sais pas encore si ce sera en freelance ou avec un contrat classique. Peut-être serez-vous l\'entreprise qui me permettra de faire mon choix !'],
        ['quefais-tuactuellement?','Je suit une license Analyst Programmeur de Système Informatique Ouvert, en alternance sur Toulouse. Il me reste peu de temps avant de passer mes soutenances de fin d\'année alors je suis probablement en train de travailler dessus : )'],
        ['commenttecontacter?','Le plus simple est de passer par mon adresse mail de contact : dev.lucas.chapuis@gmail.com. J\'essayerai de répondre dans les plus brefs délais.'],
      ]);
      static NOT_FOUND: string = "Désolé, je suis incapable de répondre... Essayez plutôt les questions proposées en introduction.";
}
