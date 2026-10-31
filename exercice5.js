// 1

const etudiantInitial = {
    prenom: "Cheikh",
    nom: "Diop",
    filiere: "IAGE",
    notes: [14, 16, 12]
}

function extraireIdentite(etudiant) {
    const { prenom, nom, filiere } = etudiant
    return { prenom, nom, filiere }
}
const identite = extraireIdentite(etudiantInitial)
console.log(identite)
 
// 2
function calculerMoyenneNotes(notes) {
    if (notes.length === 0) return 0
    
    let somme = 0
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i]
    }
    return somme / notes.length
}

// 3

function ajouterNote(etudiant, nouvelleNote) {
    return {
        ...etudiant,
        notes: [...etudiant.notes, nouvelleNote]
    }
}
const etudiantModifie = ajouterNote(etudiantInitial, 18)
console.log(etudiantModifie)

// 4
function creerResume(etudiant, ...options) {
    const identite = extraireIdentite(etudiant);
    const moyenne = calculerMoyenneNotes(etudiant.notes);
    return {
        ...identite,
        moyenne,
        options
    }
}
const resume = creerResume(etudiantInitial, "Option A", "Option B")
console.log(resume)

console.log("Longueur initiale des notes inchangée (doit être 3) :", etudiantInitial.notes.length === 3) 
console.log("Tableau des notes d'origine :", etudiantInitial.notes)




