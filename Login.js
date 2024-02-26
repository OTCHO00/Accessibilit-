const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
    const errors = [];

    if(username.value.trim() === ""){
        errors.push("Entrez votre nom d'utilisateur !")
    }

    if(password.value.length < 4){
        errors.push("Mot de passe : Minimum 4 caractère")
    }

    if(password.value.length >10){
        errors.push("Mot de passe : Maximum 10 caractère")
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    }
})
