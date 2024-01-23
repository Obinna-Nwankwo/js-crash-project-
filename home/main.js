
//Get all querySelector 
const list  =  document.querySelectorAll(".list");


// Create functions 
function activeLink () {
    list.forEach((itme) =>  
    itme.classList.remove("active"));
    this.classList.add("active");
}


//Loop throught and call the function 
list.forEach((item) => 
item.addEventListener("click", activeLink));