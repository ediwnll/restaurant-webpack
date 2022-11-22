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
    menuContainer.appendChild(createMenuList("images/BigBurger.png","Hamburger","$5.99","Crispy Buns, Thicc Patty, Juicy Tomato and Onions, Refreshing Lettuce and our Secret Sauce. What else can you ask for?"))
    menuContainer.appendChild(createMenuList("images/BigBurger.png","Hamburger","$5.99","Crispy Buns, Thicc Patty, Juicy Tomato and Onions, Refreshing Lettuce and our Secret Sauce. What else can you ask for?"))
    menuContainer.appendChild(createMenuList("images/BigBurger.png","Hamburger","$5.99","Crispy Buns, Thicc Patty, Juicy Tomato and Onions, Refreshing Lettuce and our Secret Sauce. What else can you ask for?"))
    menuContainer.appendChild(createMenuList("images/BigBurger.png","Hamburger","$5.99","Crispy Buns, Thicc Patty, Juicy Tomato and Onions, Refreshing Lettuce and our Secret Sauce. What else can you ask for?"))
    menuContainer.appendChild(createMenuList("images/BigBurger.png","Hamburger","$5.99","Crispy Buns, Thicc Patty, Juicy Tomato and Onions, Refreshing Lettuce and our Secret Sauce. What else can you ask for?"))
    menuContainer.appendChild(createMenuList("images/BigBurger.png","Hamburger","$5.99","Crispy Buns, Thicc Patty, Juicy Tomato and Onions, Refreshing Lettuce and our Secret Sauce. What else can you ask for?"))
    menuContainer.appendChild(createMenuList("images/BigBurger.png","Hamburger","$5.99","Crispy Buns, Thicc Patty, Juicy Tomato and Onions, Refreshing Lettuce and our Secret Sauce. What else can you ask for?"))

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