// =====================
// DONNÉES ANALYSES
// =====================

const content = {

politique: {
title: "Dimension politique",
text: `
Les réseaux sociaux occupent une place croissante dans les processus démocratiques. Ils permettent aux citoyens de s’exprimer publiquement, de s’organiser collectivement et de participer à des mobilisations sociales. Cette ouverture de la parole est souvent présentée comme un progrès démocratique favorisant l’engagement politique, en particulier chez les jeunes générations.
Cependant, cette démocratisation s’accompagne de risques importants. Des campagnes de désinformation organisées ont été observées lors de plusieurs élections. L’utilisation de faux comptes, de bots et de stratégies de ciblage algorithmique permet d’influencer certains groupes sociaux sans transparence, ce qui remet en question la sincérité du débat public. (L'Est Républicain)
Face à ces dérives, les États cherchent à renforcer la régulation des plateformes numériques afin de protéger les citoyens et de garantir l’intégrité des processus démocratiques. Toutefois, cette régulation soulève aussi des inquiétudes concernant la liberté d’expression et le risque de censure. Le débat politique repose donc sur une tension entre sécurité, transparence et respect des libertés fondamentales.

`
},

social: {
title: "Dimension sociale",
text: `
Sur le plan social, les réseaux sociaux ont profondément transformé les relations humaines. Ils permettent de maintenir le lien avec des proches éloignés, de créer des communautés en ligne et de partager des expériences personnelles. Pour de nombreux utilisateurs, ces plateformes représentent un espace de socialisation et d’expression identitaire.
Les réseaux sociaux ont également contribué à une meilleure visibilité de certaines minorités et causes sociales. Ils offrent un espace d’expression à des groupes auparavant peu représentés dans les médias traditionnels, favorisant parfois une reconnaissance sociale accrue.
Cependant, ces effets positifs sont contrebalancés par des conséquences préoccupantes. La diffusion massive de contenus idéalisés, notamment sur Instagram et TikTok, crée une pression sociale importante, notamment chez les adolescents, contribuant à des troubles de l’image corporelle et à une baisse d’estime de soi. (Recherche Santé)
De plus, malgré l’hyperconnexion numérique, certains utilisateurs ressentent un sentiment d’isolement croissant. Le cyberharcèlement constitue également un problème majeur. La viralité et l’anonymat favorisent des comportements agressifs pouvant avoir de lourdes conséquences sur les victimes.

`
},

sante: {
title: "Santé mentale",
text: `
Du point de vue sanitaire, les réseaux sociaux présentent un double visage. Ils facilitent l’accès à l’information médicale et permettent la diffusion de campagnes de prévention. Des communautés en ligne offrent également un soutien moral à des personnes souffrant de maladies chroniques ou de troubles psychologiques.
Cependant, plusieurs études montrent que l’usage excessif des réseaux sociaux peut avoir des effets négatifs, en particulier chez les jeunes. Les mécanismes de récompense intégrés aux plateformes favorisent des comportements proches de l’addiction. Cette dépendance peut entraîner des troubles du sommeil, une baisse de la concentration et une augmentation de l’anxiété. (Recherche Santé)
D’autre part, certaines plateformes relayent une grande quantité d’informations erronées en matière de santé, ce qui peut semer la confusion ou nuire à des personnes vulnérables. (https://nouvelles.umontreal.ca/)
Par ailleurs, des travaux de sécurité sanitaire tels que ceux de l’agence française de sécurité sanitaire montrent que l’usage des RS nuit gravement à la santé mentale des adolescents, notamment dans le cadre de troubles anxieux ou dépressifs. (CB News)

`
},

media: {
title: "Information et médias",
text: `
Les réseaux sociaux ont profondément modifié le paysage médiatique. Ils permettent une diffusion rapide de l’information et favorisent l’émergence du journalisme citoyen. Des utilisateurs peuvent désormais témoigner directement d’événements en temps réel, ce qui complète le travail des médias traditionnels (par exemple la diffusion de scènes de manifestations ou de violences via livestream).
Cependant, cette rapidité de diffusion facilite également la propagation de fausses informations. Les fake news circulent souvent plus vite que les contenus vérifiés, car elles suscitent davantage d’émotions, une dynamique favorisée par les algorithmes. (cncres.org)
De plus, les bulles de filtres enferment les utilisateurs dans des environnements informationnels personnalisés qui renforcent leurs opinions existantes et accentuent la polarisation des débats. Ce phénomène est documenté tant par la recherche scientifique que par des analyses sociologiques sur les chambres d’écho en ligne. (arXiv)

`
},

eco: {
title: "Économie de la donnée",
text: `
Les réseaux sociaux ont créé un nouvel écosystème économique. Ils ont permis l’émergence de nouveaux métiers (créateurs de contenu, community managers) et offrent aux entreprises une visibilité internationale. Les plateformes constituent un levier important de développement du commerce numérique, en particulier via la publicité ciblée et la monétisation directe (ex. OnlyFans, YouTube).
Cependant, ce modèle économique repose en grande partie sur la collecte et la monétisation des données personnelles. Les grandes entreprises technologiques concentrent l’essentiel des profits, tandis que de nombreux créateurs de contenu subissent une forte instabilité financière et une dépendance aux algorithmes.
Cette situation soulève des questions éthiques liées à la protection de la vie privée et à la répartition des richesses dans l’économie numérique.

`
}

};

// =====================
// MODAL ANALYSES
// =====================

function openModal(key) {
document.getElementById("modal").style.display = "block";
document.getElementById("modal-body").innerHTML = `
<h2>${content[key].title}</h2>
<p>${content[key].text}</p>
`;
}

function closeModal() {
document.getElementById("modal").style.display = "none";
}

// =====================
// QUIZ INITIAL
// =====================

window.onload = function() {
    document.getElementById("startQuiz").style.display = "block";
};

function startAnswer(choice) {
    localStorage.setItem("startOpinion", choice);
    document.getElementById("startQuiz").style.display = "none";
}


// =====================
// QUIZ FINAL COMPARAISON
// =====================

function finishQuiz(finalChoice) {

    const startChoice = localStorage.getItem("startOpinion");

    let evolutionMessage = "";

    if (startChoice === finalChoice) {
        evolutionMessage = "Votre opinion est restée stable.";
    } 
    else {
        evolutionMessage = "Votre point de vue a évolué grâce à l'analyse des controverses.";
    }

    document.getElementById("quiz-content").innerHTML = `
        <h3>Résultat comparatif</h3>

        <p><b>Avant l'étude :</b> ${startChoice}</p>
        <p><b>Après l'étude :</b> ${finalChoice}</p>

        <p style="margin-top:15px;">
        ${evolutionMessage}
        </p>

        <p>
        Cette démarche illustre l'objectif de la cartographie :
        transformer un usage passif en réflexion critique.
        </p>
    `;
}

// =====================
// GLOSSAIRE
// =====================

const glossary = [
{term:"Économie de l’attention", def:"Modèle économique visant à maximiser le temps d’engagement utilisateur."},
{term:"Bulle de filtre", def:"Isolement algorithmique de l’utilisateur dans un contenu homogène."},
{term:"Algorithme de recommandation", def:"Système automatisé optimisant la visibilité des contenus."},
{term:"Graphe social", def:"Modélisation des relations entre individus sur une plateforme."}
];

const container = document.getElementById("glossary-container");

glossary.forEach(item => {
container.innerHTML += `
<div class="glossary-item">
<b>${item.term}</b>
<p>${item.def}</p>
</div>
`;
});

function drawLine(x1, y1, x2, y2, svg) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "#3b82f6");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
}

function connectNodes() {
    const svg = document.getElementById("mindmap-lines");
    svg.innerHTML = ""; // Clear previous lines

    const central = document.getElementById("central-node");
    const nodes = ["politique-node", "social-node", "sante-node", "media-node", "eco-node"];

    const centralRect = central.getBoundingClientRect();
    const svgRect = svg.getBoundingClientRect();
    const cx = centralRect.left + centralRect.width / 2 - svgRect.left;
    const cy = centralRect.top + centralRect.height / 2 - svgRect.top;

    nodes.forEach(id => {
        const node = document.getElementById(id);
        const rect = node.getBoundingClientRect();
        const nx = rect.left + rect.width / 2 - svgRect.left;
        const ny = rect.top + rect.height / 2 - svgRect.top;
        drawLine(cx, cy, nx, ny, svg);
    });
}

// Positionner les nœuds autour du central (responsive)
function positionNodes() {
    const container = document.querySelector(".mindmap-container");
    const central = document.getElementById("central-node");
    const width = container.clientWidth;
    const height = container.clientHeight;

    // central node au centre
    central.style.left = `${width/2 - central.offsetWidth/2}px`;
    central.style.top = `${height/2 - central.offsetHeight/2}px`;

    // nodes satellites autour du central
    const radius = Math.min(width, height)/3;
    const nodes = ["politique-node","social-node","sante-node","media-node","eco-node"];
    nodes.forEach((id,i)=>{
        const node = document.getElementById(id);
        const angle = (i/nodes.length)*2*Math.PI;
        node.style.left = `${width/2 + radius*Math.cos(angle) - node.offsetWidth/2}px`;
        node.style.top = `${height/2 + radius*Math.sin(angle) - node.offsetHeight/2}px`;
    });
}

window.addEventListener('load', positionNodes);
window.addEventListener('resize', positionNodes);
// Initialiser carte mentale
function initMindmap() {
    positionNodes();
    connectNodes();
}

window.addEventListener("load", initMindmap);
window.addEventListener("resize", initMindmap);