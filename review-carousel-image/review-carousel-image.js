const tops = document.querySelector(".tops");
const LeftButton = document.querySelector(".tops-left");
const RightButton = document.querySelector(".tops-right");
const container = document.querySelector(".tops-container");
const topsScroll = document.querySelector(".tops-h-container");
const items = document.querySelectorAll(".tops-item");
const newStyle = document.createElement("style");

let numberOfItems = 5;
let itemsShown = 0;
let maxScroll = 0;
let itemsWidth = 0;
let topsBar = 0;

function resize() {
    if (window.matchMedia("(max-width: 900)").matches) {
        itemsShown = 2;
    } else if (window.matchMedia("(max-widht: 1200px)").matches) {
        itemsShown = Math.round((numberOfItems) / 1.5);
    } else {
        itemsShown = numberOfItems;
    }
    itemsWidth = (tops.offsetWidth - ((itemsShown + 1) * 24)) / itemsShown;
    MaxScroll = (items.length - itemsShown) * (itemsWidth + 24) - 10;
    container.style.width = items.length * (itemsWidth + 24) + 25 + "px";
    newStyle.innerHTML= ".tops-item {width: " + itemsWidth + "px }";
    tops.appendChild(newStyle);
    if (window.matchMedia("(max-width: 900px)").matches) {
        topsScroll.scrollTo((itemsWidth + 24) / 2, 0);
    } else {
        topsScroll.scrollTo(0, 0);
        topsBar = 0;
    }
}
resize();

function scrollLeft() {
    if (topsBar > 25) {
        topsBar -= (itemsWidth + 24);
        topsScroll.scrollLeft = topsBar;
    }
}

function scrollRight() {
    if (topsBar < MaxScroll - 25) {
        topsBar += (itemsWidth + 24);
        topsScroll.scrollLeft = topsBar;
    }
}


function scrollUpdate() {
    if (topsScroll.scrollLeft >= maxScroll - 25) {
        RightButton.style.opacity = 0.3;

    } else {
        RightButton.style.opacity = 1.0;

    } if (topsScroll.scrollLeft <= 25) {
        LeftButton.style.opacity = 0.3;

    } else {
        LeftButton.style.opacity = 1.0;
    }
}

topsScroll.addEventListener("scroll", scrollUpdate);
LeftButton.addEventListener("click", scrollLeft);
RightButton.addEventListener("click", scrollRight);


window.addEventListener("resize", resize);