const loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', loginUser)
//var registerButton = document.getElementById("registerButton");
const url = 'http://localhost:3000/users/login';

function loginUser(event) {

    //event.preventDefault()

    const password = document.getElementById("pass").value;

    const email = document.getElementById("email").value;

    const result = fetch(url, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }


    }).then((res) => res.json())
        .then((data) => {
            console.log(`${JSON.stringify(data)}`)
        })

    /*fetch(url,
        {
            method: "GET",

        }).then((response) => { return response.json() })
        .then((data) => console.log(data))
*/
}