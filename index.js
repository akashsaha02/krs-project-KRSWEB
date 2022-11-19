var modal = document.getElementById("myModal");
var btn = document.getElementById("mybtn");
var clse = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
clse.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}