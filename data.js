function saveNameAndRedirect() {
    var petname = document.getElementById("petname").value;
    localStorage.setItem("petname", petname);
    window.location.href = "nextpage.html";
}