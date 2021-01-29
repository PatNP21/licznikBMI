//const height = document.getElementsByClassName('height')
//const weight = document.getElementsByClassName('weight')
//var TotalProductionTime = document.forms.frm1.TotalProductionTime

const dana1 = prompt("Podaj wzrost w  [cm]: ", "175")
const dana2 = prompt("Podaj wagę w [kg]: ", "76")

const height = document.getElementById('nH')
const weight = document.getElementById('nW')

height.value = dana1
weight.value = dana2

const feedback = document.getElementsByClassName('feedback')[0]

const result = document.getElementsByClassName('display_result')[0]

const przycisk = document.querySelector('.button')

przycisk.addEventListener('click', () => {
    //console.log("Nacisnąłem przycisk!")
    console.log(parseFloat(dana1))
    console.log(parseFloat(dana2))
    console.log(height)
    console.log(weight)
    let outcome = (parseFloat(dana2)/(Math.pow(parseFloat(dana1)/100, 2)))

    
    try {
        console.log(outcome)
        result.innerHTML = "BMI: " + outcome.toFixed(2)

        if (outcome < 16) {feedback.innerHTML = "Wygłodzenie!!!"}
        else if (outcome >= 16 && outcome <= 16.99) {feedback.innerHTML = "Wychudzenie"; console.log("www")}
        else if (outcome >= 17 && outcome <= 18.49) {feedback.innerHTML = "Niedowaga"; console.log("www")}
        else if (outcome >= 18.5 && outcome <= 24.99) {feedback.innerHTML = "Waga w normie :)"; console.log("www")}
        else if (outcome >= 25 && outcome <= 29.99) {feedback.innerHTML = "Nadwaga"; console.log("www")}
        else if (outcome >= 30 && outcome <= 34.99) {feedback.innerHTML = "Otyłość I stopnia"; console.log("www")}
        else if (outcome >= 35 && outcome <= 39.99) {feedback.innerHTML = "Otyłość II stopnia"; console.log("www")}
        else {feedback.innerHTML = "Otyłość skrajna :("}
    }
    catch(error) {
        console.log(error, "Nieczego nie wyjebało!")
    }
    
    setTimeout(500, () => {
        if (outcome < 16) {feedback.innerHTML = "Wygłodzenie!!!"}
        else if (outcome >= 16 && outcome <= 16.99) {feedback.innerHTML = "Wychudzenie"}
        else if (outcome >= 17 && outcome <= 18.49) {feedback.innerHTML = "Niedowaga"}
        else if (outcome >= 18.5 && outcome <= 24.99) {feedback.innerHTML = "Waga w normie :)"}
        else if (outcome >= 25 && outcome <= 29.99) {feedback.innerHTML = "Nadwaga"}
        else if (outcome >= 30 && outcome <= 34.99) {feedback.innerHTML = "Otyłość I stopnia"}
        else if (outcome >= 35 && outcome <= 39.99) {feedback.innerHTML = "Otyłość II stopnia"}
        else {feedback.innerHTML = "Otyłość skrajna :("}
    })

})
