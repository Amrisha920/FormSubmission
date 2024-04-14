 function checkNewUser() {
        var newUser = prompt("Are you a new user? (Yes/No)");

        if (newUser && newUser.trim().toLowerCase() === "yes") {
            alert("Welcome to MyUniverse!");
        } else {
            alert("Welcome back!");
        }
    }
    function checkLogin() {
        var email = document.getElementById("email").value;
        
        var predefinedEmail = "user@example.com";

        if (email === predefinedEmail) {
            alert("You are already a user!");
            return false;
        }
        return true; 
    }
