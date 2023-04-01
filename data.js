function saveNameAndRedirect() {
    var petname = document.getElementById("petname").value;
    const petUrl = document.getElementById("charImg").src;
    localStorage.setItem("petname", petname);
    localStorage.setItem("charImg-url", petUrl);
    window.location.href = "home.html";
}
