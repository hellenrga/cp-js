const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const surname = document.getElementById('surname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPass = document.getElementById('CFpassword')

let lblName = document.querySelector('#lblName')
let lblSurname = document.querySelector('#lblSurname')
let lblEmail = document.querySelector('#lblEmail')
let lblPass = document.querySelector('#lblPass')
let lblCFpass = document.querySelector('#lblCFpass')

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

validName = false
validSurname = false
validEmail = false
validPassword = false
validConf = false

if (firstName) {

    firstName.addEventListener('keyup', () => {
        if(firstName.value.length <= 4){
            lblName.setAttribute('style', 'color: red')
            lblName.innerHTML = 'Insira no mínimo 5 caracteres'
    
            firstName.setAttribute('style', 'border-color: red')
            validName = false

        } else {
            lblName.setAttribute('style', 'color: green')
            lblName.innerHTML = 'Primeiro nome'
            firstName.setAttribute('style', 'border-color: green')
            validName = true
        }
    })
}

surname.addEventListener('keyup', () => {
    if(surname.value.length <= 4){
        lblSurname.setAttribute('style', 'color: red')
        lblSurname.innerHTML = 'Insira no mínimo 5 caracteres'

        surname.setAttribute('style', 'border-color: red')
        validSurname = false
    } else {
        lblSurname.setAttribute('style', 'color: green')
        lblSurname.innerHTML = 'Segundo nome'
        surname.setAttribute('style', 'border-color: green')
        validSurname = true
    }
})


email.addEventListener('keyup', () => {
    if(email.value.length <= 4){
        lblEmail.setAttribute('style', 'color: red')
        lblEmail.innerHTML = 'Insira no mínimo 5 caracteres'

        email.setAttribute('style', 'border-color: red')
        validEmail = false
    } else {
        lblEmail.setAttribute('style', 'color: green')
        lblEmail.innerHTML = 'E-mail'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

password.addEventListener('keyup', () => {
    if(password.value.length < 6 || password.value.length > 8){
        lblPass.setAttribute('style', 'color: red')
        lblPass.innerHTML = 'Insira entre 6 e 8 caracteres'

        password.setAttribute('style', 'border-color: red')
        validPassword = false
    } else {
        lblPass.setAttribute('style', 'color: green')
        lblPass.innerHTML = 'Senha'
        password.setAttribute('style', 'border-color: green')
        validPassword = true
    }
})

confirmPass.addEventListener('keyup', () => {
    if(password.value != confirmPass.value || confirmPass.value == ''){
        lblCFpass.setAttribute('style', 'color: red')
        lblCFpass.innerHTML = 'As senhas não conferem'

        confirmPass.setAttribute('style', 'border-color: red')
        validConf = false
    } else {
        lblCFpass.setAttribute('style', 'color: green')
        lblCFpass.innerHTML = 'Confirmar senha'
        confirmPass.setAttribute('style', 'border-color: green')
        validConf = true
    }
})


function cadastrar(){
    if(validName && validSurname && validEmail && validPassword && validConf){

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Usuário cadastrado :)</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

    } else {

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')


    }
}

document.getElementById("submit").addEventListener("click", cadastrar)

