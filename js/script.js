window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector(".menu");
    menuItem = document.querySelectorAll("menu_item");
    hambuger = document.querySelector(".hamburger");

    hambuger.addEventListener("click", () => {
        hambuger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
    });

    menuItem.forEach(item => {
        item.addEventListener("click", () => {
            hambuger.classList.toogle("hamburger_active");
            menu.classList.toggle("menu_active");
        })
    })
})