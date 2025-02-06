
export abstract class Questions {
  static CORRESPONDING_ANSWER: Map<string, string> = new Map<string, string>([
    ['es-tudisponible?', 'Je suis toujours disponible pour parler de projets intéressants ! Cependant, je suis <u>pris jusqu\'en septembre 2025</u>, donc si vous n\'êtes pas pressé (ou que vous êtes simplment prévoyant 😉 ), nous pouvons <b>toujours discuter de vos attentes</b>. Pour cela, n\'hésitez pas à utiliser mon email en me posant la question : <i>Comment vous contacter ?</i>'],
    ['quelssonttesprojets?', 'Alors que j\'approche de la fin de mes études, je commence à définir plus clairement mes projets d\'avenir.Pour l\'instant, ils se concentrent sur deux choses:</br></br>- 🔬 Continuer à travailler dans des domaines <b>innovants de la recherche et du développement</b>.</br>- 🧳 Vivre des <b>expériences stimulantes</b>, et une chose à laquelle je pense depuis longtemps, c\'est de <b>voyager et de travailler à l\'étranger</b>. Il reste à voir où je mettrai mes priorités, mais au moins vous savez ce que j\'ai en tête ! '],
    ['quefais-tuactuellement?', 'Je travaille chez General Electric (maintenant GE Vernova) en collaboration avec l\'école Epitech pour obtenir un master en architecture et développement de logiciels. Je travaille en recherche et développement sur des problématiques 🪛 <b> d\'architecture logicielle à grande échelle</b>. Sans donner trop de détails, il s\'agit de trouver des moyens innovants pour permettre 📥 <b> l\'absorption de données à grande échelle</b>, de mettre en place une software factory dans un contexte de <b>microservices</b> et bien d\'autres défis passionnants !'],
    ['commenttecontacter?', 'Le plus simple est de passer par mon adresse mail de contact : </br></br>-<b> 📧 dev.lucas.chapuis@gmail.com.</b></br></br> J\'essayerai de répondre dans les plus brefs délais.'],

    ['areyouopentowork?', 'I\'m always available to talk about interesting projects! However, I\'m <u>booked until September 2025</u>, so if you\'re not in a hurry (or just thinking ahead 😉 ) we can <b>always discuss your expectations</b>. For that, don\'t hesitate to use my email by asking me the question: <i>How to contact you?</i>'],
    ['whatareyourprojects?', 'As I approach the end of my studies, I\'m starting to define my future plans more clearly. At the moment they focus on 2 things:</br></br>- 🔬 Continuing to work in innovative areas of <b>research and development.</b></br>- 🧳 Having <b>challenging experiences</b>, and one thing I\'ve been thinking about for a long time is <b>travelling</b> and <b>working abroad.</b></br></br> It remains to be seen where I\'ll put my priorities, but at least you know what I have in mind!'],
    ['whatareyoudoingcurrently?', 'I\'m working at General Electric (now GE Vernova) in collaboration with the Epitech school to obtain a master\'s degree in software architecture and development. I work in research and development on 🪛 <b>large-scale software architecture</b> problematics. Without giving too much details, it\'s all about finding innovative ways of enabling large-scale 📥 <b>data absorption</b>, setting up software factories in a <b>microservices context</b> and many other exciting challenges!'],
    ['howtocontactyou?', 'The easiest way is to use my contact email address: </br></br>-<b> 📧 dev.lucas.chapuis@gmail.com.</b></br></br> I\'ll try to reply as soon as possible.'],
  ]);
  static NOT_FOUND: string = $localize`Désolé, je suis incapable de répondre... Essayez plutôt les questions proposées en introduction.`;
}
