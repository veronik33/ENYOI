const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

function login(){

    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    
    if (user=="veronica" && password == "3300")
     {
        window.location = "gestion.html";
    }

    else
    {
        alert("Datos Incorrectos");
    }
}
 