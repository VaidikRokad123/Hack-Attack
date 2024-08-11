function validateForm() {
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;

    if ( email == "" ||  password == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    return true;
}