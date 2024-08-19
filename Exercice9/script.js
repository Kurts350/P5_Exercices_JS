// votre code ici
function checkAge(age){
if (age >= 65) {
    return "Vous êtes senior."
} else if (age >= 18) {
    return"Vous êtes majeur."
} else if (age < 18) {
    return"Vous êtes mineur."
}
}

export default checkAge;
