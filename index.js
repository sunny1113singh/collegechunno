//for mobile-navbar

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".nav-secondary");
// const doc_body = document.querySelector("header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


//for-mobile colleges

const mobile_nav_college = document.querySelector(".sub-links1");
 const nav_header_college = document.querySelector(".inner_drop_menu");
// const doc_body_college = document.querySelector("navbar");

const toggleNavbarCollege = () => {
  nav_header_college.classList.toggle("active");
};

mobile_nav_college.addEventListener("click", () => toggleNavbarCollege());

