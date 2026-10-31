const groupeA = ["Awa","Moussa","Fatou"];
const goupeB =["Ibra","Mariama"];
const etudiantBase = {nom:"Diop",filiere:"IAGE",niveau:"L2"};

// 1 
 const groupeUnion = {...groupeA,...goupeB}

// 2
const copieGroupeA = [...groupeA, "Cheikh"]
console.log("Original :", groupeA)
console.log("Copie :", copieGroupeA)

// 3
const etudiantComplet = { ...etudiantBase, age: 22, ville: "Dakar" }

// 4
const copieEtudiantBase = { ...etudiantBase, niveau: "L3" }
console.log("Original :", etudiantBase) 
console.log("Copie :", copieEtudiantBase)

// 5
const coordonnees = { x: 14, y: 17, ville: "Dakar" }
const contact = { tel: "770000000", email: "contact@ecole.sn", ville: "Rufisque" }
const profil = { ...coordonnees, ...contact }
console.log(profil); 


