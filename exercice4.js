// 1
function additionner(...nombres) {
let total = 0
for(let i = 0; i<nombres.length;i++){
    total+=nombres[i]
}
return total
}
console.log(additionner(2,3))
console.log(additionner(1,2,3,4,5))

// 2
afficherPremierEtAutres("JavaScript", "CSS", "Node.js")
function afficherPremierEtAutres(premier, ...autres) {
    console.log(premier);
    console.log(autres);
}


// 3
function creerFiche(nom, filiere, ...competences) {
    return {
        nom,
        filiere,
        competences
    };
}

// 4
console.log(creerFiche("Cheikh", "IAGE", "JavaScript", "PHP", "SQL"))


const explication = "Le paramètre rest doit être le dernier car il collecte tous les arguments restants dans un tableau. S'il était placé au début ou au milieu, JavaScript ne pourrait pas savoir où s'arrête ce tableau pour attribuer les variables suivantes.";
console.log(explication);
