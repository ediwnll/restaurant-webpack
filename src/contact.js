function createContact(){
    const contact = document.createElement("div")
    contact.setAttribute('id','contact')

    const contactHeader= document.createElement("div")
    contactHeader.classList.add("contact-header")
    contactHeader.append(createHeading("Contact"))
    contactHeader.append(createImage("contact-logo","images/contact-mail.png"))

    const contactContainer = document.createElement("div")
    contactContainer.classList.add("contact-container")

    const contactInfo = document.createElement("div")
    contactInfo.classList.add("contact-info")
    contactContainer.append(contactInfo)

    const address = document.createElement("div")
    address.classList.add("address")
    const addressParagraph = document.createElement("p")
    addressParagraph.innerHTML = `<i class="fa-solid fa-location-dot"></i>
    26 Clementi Loop<br>Singapore 129817`
    address.append(addressParagraph)
    contactInfo.append(address)
    
    const hours = document.createElement("div")
    hours.classList.add("hours")
    const hoursParagraph = document.createElement("p")
    hoursParagraph.innerHTML = `<i class="fa-solid fa-clock"></i>
    <span>Mon-Fri</span>
    8am - 9pm<br>
    <span>Sat-Sun</span>
    8am - 11pm`
    hours.append(hoursParagraph)
    contactInfo.append(hours)

    const phone = document.createElement("div")
    phone.classList.add("phone")
    const phoneParagraph = document.createElement("p")
    phoneParagraph.innerHTML=`<i class="fa-solid fa-phone"></i>
    6661 9333`
    phone.append(phoneParagraph)
    contactInfo.append(phone)

    const form = document.createElement("div")
    form.classList.add("contact-form")
    const contactForm = document.createElement("form")
    





    contact.append(contactHeader)
    contact.append(contactContainer)

    return contact
}

function createImage(classes,src){
    const image = document.createElement("img")
    image.classList.add(`${classes}`)
    image.src = src
    return image

}

function createHeading(text){
    const heading = document.createElement("h1")
    heading.textContent = text
    return heading
}

function createParagraph(text){
    const paragraph = document.createElement("p")
    paragraph.textContent = text
    return heading
}

function loadContact(){
    const mainContainer = document.getElementById("mainContainer")
    mainContainer.textContent = ""
    mainContainer.append(createContact())
}


export default loadContact;