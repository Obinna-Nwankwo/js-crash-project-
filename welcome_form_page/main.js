
// selecte  all query by class
const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");


// create a function 
registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove("active");
});