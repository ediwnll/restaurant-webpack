//create docu8ment
//document.createElement("div")

//add classlist
//.classList.add

function createMenu(){
    const menu = document.createElement("div")
    menu.setAttribute("id","menu")

    const menuHeader = document.createElement("div")
    menuHeader.classList.add("menu-header")
    menuHeader.appendChild(createHeading("Menu"))
    menuHeader.appendChild(createImage("menu-logo","images/chef.png"))

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")

    menuContainer.appendChild(createMenuList("images/BigBurger.png","Hamburger","$5.99","Crispy Buns, Thicc Patty, Juicy Tomato and Onions, Refreshing Lettuce and our Secret Sauce. What else can you ask for?"))
    menuContainer.appendChild(createMenuList("images/BigMac.png","Cheeseburger","$6.99","Same as the Hamburger, but more filling to satisfy you"))
    menuContainer.appendChild(createMenuList("images/crispychicken.png","Crispy Chicken Cutlet","$4.99","Deep fried so you get the best crunch and taste the juice of the chicken"))
    menuContainer.appendChild(createMenuList("images/friedchicken.png","Fried Chicken (Drumlets and Wings)","$5.99","Who doesn't love their wings and drums fried. Comes with our secret recipe sauce"))
    menuContainer.appendChild(createMenuList("images/steak.png","Sirloin Steak","$7.99","The classic Sirloin. Enjoy it being medium rare, baste with rosemay,garlic,butter and thyme."))
    menuContainer.appendChild(createMenuList("images/tomatospaghetti.png","Tomato Spaghetti","$4.99","Cook with the healthiest oil, freshest tomatoes. You can't go wrong with good ingredients"))
    menuContainer.appendChild(createMenuList("images/pasta.png","Carbonara","$4.99","Creamy Carbonara, where do we get our recipe from? It's Antonio Carluccio and he calls his recipe the real Carbonara"))
    menuContainer.appendChild(createMenuList("images/milktea.png","Boba Milk Tea","$2.99","Boba Milk Tea with all the mains that we offer? What a refreshing treat!"))

    menu.appendChild(menuHeader)
    menu.appendChild(menuContainer)

    return menu


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

function createImage(classes,src){
    const image = document.createElement("img")
    image.classList.add(`${classes}`)
    image.src = src
    return image

}

function createMenuList(src,itemname,cash,description){
    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")

    const image =document.createElement("img")
    image.classList.add("menu-logo")
    image.src = src

    const itemContent = document.createElement("div")
    itemContent.classList.add("item-content")

    const h4paragraph = document.createElement("h4")
    h4paragraph.textContent = itemname

    const span = document.createElement("span")
    span.textContent = cash

    const describe = document.createElement("p")
    describe.textContent = description

    menuItem.appendChild(image)
    menuItem.appendChild(itemContent)
    itemContent.appendChild(h4paragraph)
    itemContent.appendChild(describe)
    h4paragraph.appendChild(span)

    return menuItem
}

function loadMenu(){
    const mainContainer = document.getElementById("mainContainer")
    mainContainer.textContent = ""
    mainContainer.appendChild(createMenu())
}

export default loadMenu;