let number = 21

const userName = prompt("Quale è il tuo nome?");

const surName = prompt("Quale è il tuo cognome?");

const favouriteColor = prompt("Quale è il tuo colore preferito?");

let resultPassword = userName + surName + favouriteColor + number;
console.log(resultPassword)

password.innerHTML = `<strong>${resultPassword}</strong>`
