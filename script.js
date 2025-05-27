let changeColorBtn = document.getElementById("changeColor");
let headEle = document.getElementById("headEl");

changeColorBtn.onclick = function() {
    headEle.classList.toggle("to-red");
}