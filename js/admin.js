// declarations and initializations
const dashboard_button = document.getElementById("dashboard-button");
const edit_item_button = document.getElementById("edit-item-button");
const edit_page_button = document.getElementById('edit-page-button');
const edit_item_section = document.getElementById("edit-item-section");
const edit_page_section = document.getElementById("edit-page-section");
const dashboard_section = document.getElementById("dashboard-section");
const pick_image = document.getElementById("pick-image");
const images_container = document.getElementById("images-container");
const add_item_button = document.getElementById("add-item-button");
const add_item_section = document.getElementById("add-product");

// setting initial settings
change_screen(3)

// changing screen depending upon button clicked
dashboard_button.addEventListener("click", () => {
    change_screen(1);
});

edit_item_button.addEventListener("click", () => {
    change_screen(2);
});

edit_page_button.addEventListener("click", () => {
    change_screen(3);
});

function change_screen(choice) {
    if (choice == 1) {
        edit_item_section.style.display = "none";
        edit_page_section.style.display = "none";
        dashboard_section.style.display = "block";
        dashboard_button.classList.add("active");
        edit_item_button.classList.remove("active");
        edit_page_button.classList.remove("active");
    } else if (choice == 2) {
        dashboard_section.style.display = "none";
        edit_page_section.style.display = "none";
        edit_item_section.style.display = "block";
        edit_item_button.classList.add("active");
        dashboard_button.classList.remove("active");
        edit_page_button.classList.remove("active");
    } else if (choice == 3) {
        dashboard_section.style.display = "none";
        edit_item_section.style.display = "none";
        edit_page_section.style.display = "block";
        edit_item_button.classList.remove("active");
        dashboard_button.classList.remove("active");
        edit_page_button.classList.add("active");
    }
}

add_item_button.onclick = () => {
    add_item_section.style.display = "block";
    add_item_button.style.display = "none";
}

// edit page

const category_list_header = document.getElementById('category-list-header');
const category_list = document.getElementById('category-list');
const category_list_header_arrow = document.querySelector('#category-list-header img')

category_list_header.onclick = () => {
    const computedStyle = window.getComputedStyle(category_list);
    if (computedStyle.display === 'none') {
        category_list_header_arrow.style.transform = 'rotate(180deg)';
        category_list.style.display = 'block';
    } else {
        category_list_header_arrow.style.transform = 'rotate(0deg)';
        category_list.style.display = 'none';
    }
};
