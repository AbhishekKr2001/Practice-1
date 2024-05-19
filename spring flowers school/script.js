const login = document.querySelector(".login-container");
const welcome = document.querySelector(".welcome");

function hidelogin() {
    console.log("running");
    login.classList.add("hidden");
    welcome.classList.remove("hidden");
}
