function createHome(){
    const main = document.createElement("div")
    main.setAttribute('id','main')

    const homeText = document.createElement("div")
    homeText.classList.add("home-text")
    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("button-container")
    const orderButton = document.createElement("a")
    orderButton.classList.add("order-now")
    orderButton.textContent = "Order Now"

    homeText.appendChild(createHeading("YOU KNOW WHAT'S UP"))
    homeText.appendChild(createParagraph("Good food awaits..."))
    homeText.appendChild(buttonContainer)
    buttonContainer.appendChild(orderButton)

    const info = document.createElement("div")
    info.classList.add("info")

    const addressInfo = document.createElement("div")
    addressInfo.classList.add("address-info")
    addressInfo.innerHTML=`<span>
    <i class="fa-solid fa-location-dot"></i>
    </span>
    <p>26 Clementi Loop<br>Singapore 129817</p>`

    const openingInfo = document.createElement("div")
    openingInfo.classList.add("opening-hours-info")
    const openingSpan = document.createElement("span")
    const openingIcon = document.createElement("i")
    openingIcon.classList.add("fa-solid")
    openingIcon.classList.add("fa-clock")
    openingSpan.appendChild(openingIcon)

    const opening =document.createElement("div")
    opening.classList.add("opening")
    opening.innerHTML=`<span>Mon-Fri</span>
    <p>8am - 9pm</p><br>
    <span>Sat-Sun</span>
    <p>8am - 11pm</p>`
    openingInfo.appendChild(openingSpan)
    openingInfo.appendChild(opening)

    info.appendChild(addressInfo)
    info.appendChild(openingInfo)

    main.appendChild(homeText)
    main.appendChild(info)

    return main

}

function createParagraph(text){
    const paragraph = document.createElement("p")
    paragraph.textContent = text
    return paragraph
}
function createHeading(text){
    const heading = document.createElement("h1")
    heading.textContent = text
    return heading

}

function createSpan(text){
    const span = document.createElement("span")
    span.textContent = text
    return span
}

function loadHome(){
    const mainContainer = document.getElementById("mainContainer")
    mainContainer.textContent = "";
    mainContainer.appendChild(createHome())
}




export default loadHome;