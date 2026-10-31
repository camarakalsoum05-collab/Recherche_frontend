const etudiant = {
    id:2026,
    nom:"ndiaye",
    prenom:"Moussa",
    filiere:"IAGE",
    niveau:"L2",
    ville:"Dakar"
};

//1
const nom = etudiant.nom
const prenom = etudiant.prenom
const filiere = etudiant.filiere
console.log(nom)
console.log(prenom)
console.log(filiere)

//2
const {niveau:classe} = etudiant
console.log(classe)

//3
const resultats=[15,11,17,13,16];
const [quinze,onze,dix_sept,treize,seize]=resultats
console.log(quinze,onze,seize)

//4
const [ , , noteTrois] = resultats;

console.log(noteTrois); // Affichera : 17
//5
const{email="contact@masvyacademy.com"}=etudiant
console.log(email)

//6
console.log(`je m appelle ${prenom} ${nom} je suis etudiant en ${classe} ${filiere}`)


