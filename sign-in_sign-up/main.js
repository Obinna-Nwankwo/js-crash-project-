
// select all the query by class 
const signInBtnLink  =  document.querySelector(".signInBtn-link");
const signUpBtnLink  =  document.querySelector(".signUpBtn-link");
const wrapper  =  document.querySelector(".wrapper");


//add event lister to change the form when click on 
signUpBtnLink.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});

signInBtnLink.addEventListener("click", () =>{
    wrapper.classList.toggle("active");
});