var menu = document.querySelector(".header_menu_container");
var btn = document.querySelector(".menu_button");
btn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    btn.classList.toggle("x_button");
});