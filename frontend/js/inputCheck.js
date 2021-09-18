
function inputCheckRegister() {

    const name = document.forms["register"]["name"].value;
    const lastName = document.forms["register"]["lastname"].value;
    const password = document.forms["register"]["pass"].value;
    const passwordConfirm = document.forms["register"]["pass1"].value;
    const terms = document.forms["register"]["terms"].value;


    const regex = /\d/;


    if (name == "") {
        alert("Name is not empty! Please, enter your name");
        return false;
    }
    if (lastName == "") {
        alert("last Name is not empty! Please, enter your name");
        return false;
    }

    if (regex.test(name) || regex.test(lastName)) {
        alert("Names can not contain numeric value!");
        return false;
    }

    if (password != passwordConfirm) {
        alert("Passwords do not match! Enter password again:");
        return false;
    }

    if (terms == null) {
        alert("You must click to button and agree with terms!");
        return false;
    }
    return true;
}