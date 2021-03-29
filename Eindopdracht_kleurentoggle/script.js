/* Pak het ul blok met class kleuren-menu__colors*/
const colorMenu = document.querySelector(".kleuren-menu__colors");
//Smooth overgang van het menu
colorMenu.style.transitionDuration = "1s";

/* Verberg het ul blok met class kleuren-menu__colors 275px naar links*/
colorMenu.style.transform = "translateX(" + (-275) + "px)";

/* Pak de image met id hamburger-id */
const getImage = document.getElementById("hamburger-id");

/* Function voor als je over de image hovert, plaats ul blok op originele positie */
hoverImageIn = function () {
    colorMenu.style.transform = "translateX(" + (0) + "px)";
}

// Function om de kleur van de actieve kleur als achtergrond kleur te gebruiken.
getActive = function () {
    if (document.activeElement) {
        const kleurenId = document.getElementById("kleuren-id");
        const idActive = document.activeElement.id;
        const colorActive = document.getElementById(idActive);
        if (colorActive != null) {
            let currentColor = colorActive.classList.item(1);
            if (kleurenId.classList.length > 1) {
                let removeColor = kleurenId.classList.item(1);
                kleurenId.classList.remove(removeColor);
            }
            kleurenId.classList.add(currentColor);
            let colorText = document.getElementById("color-text").innerHTML = currentColor;
        }
    }
};

//Function voor wanneer er niks gebeurd na het hoveren.
clickColorDelay = function () {
    setTimeout(function () {
    colorMenu.style.transform = "translateX(" + (-275) + "px)";
    }, 1000);
}

/* Function voor als je een kleur hebt aangeklikt, verberg ul blok naar links */
clickColorOut = function () {
    colorMenu.style.transform = "translateX(" + (-275) + "px)";
}

/* Voer de hover en clik functions uit */
getImage.addEventListener("mouseover", hoverImageIn);
getImage.addEventListener("mouseleave", clickColorDelay)
colorMenu.addEventListener("click", clickColorOut);
colorMenu.addEventListener("click", getActive);