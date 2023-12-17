// declarations and initializations
const dashboard_button = document.getElementById("dashboard-button");
const edit_item_button = document.getElementById("edit-item-button");
const edit_item_section = document.getElementById("edit-item-section");
const dashboard_section = document.getElementById("dashboard-section");
const pick_image = document.getElementById("pick-image");
const images_container = document.getElementById("images-container");

// setting initial settings
change_screen(2)

// changing screen depending upon button clicked
dashboard_button.addEventListener("click", () => {
    change_screen(1);
});

edit_item_button.addEventListener("click", () => {
    change_screen(2);
});

function change_screen(choice) {
    if (choice == 1) {
        edit_item_section.style.display = "none";
        dashboard_section.style.display = "block";
        dashboard_button.classList.add("active");
        edit_item_button.classList.remove("active");
    } else {
        edit_item_section.style.display = "block";
        dashboard_section.style.display = "none";
        edit_item_button.classList.add("active");
        dashboard_button.classList.remove("active");
    }
}

