//$(document).ready(() => {
const formRegister = document.getElementById("register");
formRegister.addEventListener('submit', registerUser)
//var registerButton = document.getElementById("registerButton");
const url = 'http://localhost:3000/users';

function registerUser(event) {

    //event.preventDefault()
    const name = document.forms["register"]["name"].value;
    const lastName = document.forms["register"]["lastname"].value;
    const password = document.forms["register"]["pass"].value;
    const passwordConfirm = document.forms["register"]["pass1"].value;
    //const terms = document.forms["register"]["terms"].value;
    const email = document.forms["register"]["email"].value;


    var user = new Object();
    user.name = name;
    user.lastName = lastName;
    user.password = password;
    user.passwordConfirm = passwordConfirm;
    user.email = email;

    const userData = JSON.stringify(user);
    if (password == passwordConfirm) {


        const result = fetch(url, {
            method: 'POST',
            body: userData,
            headers: {
                'Content-Type': 'application/json'
            }


        }).then((res) => res.json())
            .then((data) => {
                console.log(`${JSON.stringify(data)}`);
                console.log(userData + " posted to register");

            })
    }
    /*
        if (result.status === 'ok' ) {
    
            alert('Registration Succesfull!')
        } else {
            alert(result.error)
        }
    */
}
