
    function calculerMoyenne(note1, note2, note3) {
    return (note1 + note2 + note3) / 3;
}

console.log(calculerMoyenne(12,14,16))

function estAdmis(moyenne) {
    return moyenne >= 10;
}
console.log(estAdmis(9.5))

function calculerPrixTTC(prixHT,tauxTVA=0.18){
    prixTTC=prixHT*(1+0.18)
    return prixTTC
}
console.log(calculerPrixTTC(10000))

function convertirEnMinutes(heure){
    min=heure*60
    return min
}
console.log(convertirEnMinutes(2))

