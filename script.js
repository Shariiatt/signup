var form = document.getElementById("form");
var first_name = document.getElementById("firstName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var repeat_password = document.getElementById("repeat-password");
var errorMessage = document.getElementById("errorMessage");



form.addEventListener("submit",(e) => {

    let errors = [];

    if(first_name){
        errors = getSignUpErrors(first_name.value, email.value , password.value, repeat_password.value)
    }
    else {

        errors = getLoginErrors(email.value , password.value);
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.innerHTML = errors.join(", ")
    }

})

function getSignUpErrors(firstName, Email, Password, RepeatPassword){
    let errors = [];

    if(firstName === '' || firstName === null) {
        errors.push('First Name is required');
        first_name.parentElement.classList.add('incorrect');
    }
    if(Email === '' || Email === null) {
        errors.push('Email is required');
        email.parentElement.classList.add('incorrect');
    }
    if(Password === '' || Password === null) {
        errors.push('Password is required');
        password.parentElement.classList.add('incorrect');
    }

    if(Password.length < 8) {
        errors.push('Password must have atleast 8 characters');
        password.parentElement.classList.add('incorrect');
    }

    if(Password !== RepeatPassword){
        errors.push('Password fields do not match!');
        password.parentElement.classList.add('incorrect');
        repeat_password.parentElement.classList.add('incorrect');
    }
    

    return errors;
}

function getLoginErrors(Email,Password){

    let errors = [];

    if(Email === '' || Email === null) {
        errors.push('Email is required');
        email.parentElement.classList.add('incorrect');
    }
    if(Password === '' || Password === null) {
        errors.push('Password is required');
        password.parentElement.classList.add('incorrect');
    }

    if(Password.length < 8) {
        errors.push('Password must have atleast 8 characters');
        password.parentElement.classList.add('incorrect');
    }

    return errors;
    
}
const allInputs = [first_name,email,password,repeat_password].filter(input => input != null);

allInputs.forEach(input => {
    input.addEventListener('input' , () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect');
            errorMessage.innerHTML = '';

        }
    })
})


