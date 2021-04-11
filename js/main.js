// grab all items that we need
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const menuItems = document.querySelectorAll(".nav-item");

// event listner on the menu button
menuBtn.addEventListener("click", toogle);

// current state of the menu
let showMenu = false;

// toggle function
function toogle() {
    console.log(menuItems);
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuBranding.classList.add("show");
        menuNav.classList.add("show");

        menuItems.forEach((item) => item.classList.add("show"));
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuBranding.classList.remove("show");
        menuNav.classList.remove("show");

        menuItems.forEach((item) => item.classList.remove("show"));
        showMenu = false;
    }
}