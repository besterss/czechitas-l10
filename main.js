const c = console.log.bind(document)

/********** Přihlášení **********/
const uzivatel1 = {
    email1: "tomas.novak@gmail.com",
    heslo1: "CzechitasJeSuper",
    jmeno: "Tomáš"
}

let emailPrihlaseni = document.getElementById("Email1")
let hesloPrihlaseni = document.getElementById("Password1")
let spatneUdaje = document.getElementById("spatneUdaje")
let spravneUdaje = document.getElementById("spravneUdaje")

let formular2 = document.querySelector(".formular2")
let email11 = ""
let heslo11 = ""

function prihlaseni(event){
    event.preventDefault()

    email11 = emailPrihlaseni.value
    heslo11 = hesloPrihlaseni.value

    if(email11 === uzivatel1.email1 && heslo11 === uzivatel1.heslo1){
        spravneUdaje.classList.add("spravnePrihlaseni")
        spravneUdaje.textContent = "Přihlášený uživatel " + uzivatel1.jmeno
        formular2.classList.add("zmizeni")

    }
    else{
        hesloPrihlaseni.value = ""
        spatneUdaje.classList.add("spatnePrihlaseni1")
        emailPrihlaseni.classList.add("spatnePrihlaseni2")
        hesloPrihlaseni.classList.add("spatnePrihlaseni2")
        
        spatneUdaje.textContent = "Neplatné přihlašovací údaje."
    }
}
