import loadHome from "./home";
import loadMenu from "./menu";

function createNav(){
    const nav = document.createElement("nav");

    const navLeft = document.createElement("div");
    navLeft.classList.add("nav-left");
    const navTitle = document.createElement("p");
    navTitle.classList.add("nav-title")
    navTitle.textContent = "Fusion Expresso";
    const navLogo = document.createElement("img");
    navLogo.classList.add("nav-logo");
    navLogo.src= `images/scooby.png`;
    navLogo.alt= `scooby`;

    const navRight = document.createElement("div");
    navRight.classList.add("nav-right");

    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent= "Home";
    homeButton.addEventListener("click", (e)=>{
        if(e.target.classList.contains("active"))return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent= "Menu";
    menuButton.addEventListener("click", (e)=>{
        if(e.target.classList.contains("active"))return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent= "Contact Us";
    contactButton.addEventListener("click", (e)=>{
        if(e.target.classList.contains("active"))return;
        setActiveButton(contactButton);
        loadContact();
    });

    nav.appendChild(navLeft);
    navLeft.appendChild(navTitle);
    navLeft.appendChild(navLogo);
    nav.appendChild(navRight);
    navRight.appendChild(homeButton);
    navRight.appendChild(menuButton);
    navRight.appendChild(contactButton);
    return nav;
    
}

function setActiveButton(button){
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button)=>{
        if(button !== this){
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain(){
    const mainContainer = document.createElement("div")
    mainContainer.classList.add("main-container")
    mainContainer.setAttribute("id","mainContainer")
    return mainContainer
}

function initialiseWebsite(){
    const content = document.getElementById("tab-content")
    content.appendChild(createNav());
    content.appendChild(createMain())
    console.log(content)

    setActiveButton(document.querySelector(".button-nav"))
    loadHome();
}

export default initialiseWebsite;