
// document.documentElement.style.scrollBehavior = "smooth";
// Global variables
let counter = 4
const navItem = document.getElementsByClassName("navbar__menu");
const navList = document.getElementById("navbar__list");


// when click on Add Section button it will create a new section and add it's link to the navbar 
document.getElementById("btn").addEventListener("click", () => {
    createSec();
    createNavbar();
});


window.addEventListener('scroll', function () {

    //top button only visible when the user scrolls below the fold of the page.
    let currentScrollPos = window.pageYOffset;
    //  
    if (currentScrollPos < 150) {
        document.getElementById("top").style.visibility = "hidden";
    } else {
        document.getElementById("top").style.visibility = "visible";
    }
    makeActive();
});

// make the shown section in the screen active to hover it
function makeActive() {
    document.querySelectorAll("section").forEach((section) => {
        let activeSec = document.getElementById("section" + section.id);
        let top = section.offsetTop - 400
        let bottom = section.offsetHeight + section.offsetTop - 400;
        window.addEventListener('scroll', () => {
            let scrollPosition = window.scrollY;
            if (scrollPosition > top && scrollPosition < bottom) {
                section.classList.add("your-active-class");
                activeSec.classList.add("active-Section");
            } else {
                section.classList.remove("your-active-class");
                activeSec.classList.remove("active-Section");
            }
        });
    });
}

// Global Functions

//create new section
function createSec() {
    const section = document.createElement('section');
    section.setAttribute('id', 'section' + counter);
    section.setAttribute('data-nav', 'Section ' + counter);

    const divSec = document.createElement('div');
    divSec.setAttribute('class', 'landing__container');

    const head = document.createElement('h2');
    const htext = document.createTextNode(`Section ${counter}`);
    head.appendChild(htext);

    const pone = document.createElement('p');
    const poneText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.');
    pone.appendChild(poneText);

    const ptwo = document.createElement('p');
    const ptwoText = document.createTextNode('Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.');
    ptwo.appendChild(ptwoText);

    divSec.appendChild(head);
    divSec.appendChild(pone);
    divSec.appendChild(ptwo);
    section.append(divSec);
    counter++;
    document.querySelector("main").appendChild(section);
}


//create Nav Bar Item
function createNavbar() {
    navList.innerHTML = " "
    document.querySelectorAll("section").forEach((section) => {
        const liItem = document.createElement('li');
        const linkItem = document.createElement('a');
        linkItem.setAttribute('class', 'menu__link');
        linkItem.setAttribute('href', '#' + section.id);
        linkItem.setAttribute('data-nav', section.id);
        linkItem.setAttribute('id', 'section' + section.id);
        const linkData = document.createTextNode(' ' + section.dataset.nav);
        linkItem.appendChild(linkData);
        liItem.appendChild(linkItem);
        navList.appendChild(liItem);
    });
}


// smooth scroll behaviour 
document.addEventListener("click", (event) => {
    event.preventDefault();
    const id = event.target.dataset.nav;
    let toTop;
    if (id === "top") {
        toTop = 0;
    } else if (id != null) {
        toTop = document.getElementById(`${id}`).offsetTop;
    }
    window.scrollTo({ top: toTop, behavior: 'smooth' });
});

// once the page load it will create navbar
createNavbar();









