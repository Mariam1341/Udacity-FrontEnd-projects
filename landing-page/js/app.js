
// document.documentElement.style.scrollBehavior = "smooth";
// Global variables
let counter = 4
const navItem = document.getElementsByClassName("navbar__menu");
const navList = document.getElementById("navbar__list");



// Clicking on the button TOP will scroll to the top smoothly
document.getElementById("top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// when click on Add Section button it will create a new section and add it's link to the navbar 
document.getElementById("btn").addEventListener("click", () => {
    createSec();
    createNavbar();
});


window.addEventListener('scroll', function () {

    //top button only visible when the user scrolls below the fold of the page.
    let currentScrollPos = window.pageYOffset;
    // console.log(currentScrollPos)
    if (currentScrollPos < 150) {
        document.getElementById("top").style.visibility = "hidden";
    } else {
        document.getElementById("top").style.visibility = "visible";
    }

    //active state to the navigation items when a section is in the viewport
    document.querySelectorAll("section").forEach((section) => {
        const position = section.getBoundingClientRect();
        const activeSec = document.getElementById("section" + section.id)
        // checking whether fully visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            section.classList.add("your-active-class");
            activeSec.classList.add("active-Section");
        } else {
            section.classList.remove("your-active-class");
            activeSec.classList.remove("active-Section");
        }

    });
});


// Global Functions

//create new section
function createSec() {
    const section = `<section id="section${counter}" data-nav="Section ${counter}">
    <div class="landing__container">
    <h2>Section ${counter}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
    counter++;
    document.querySelector("main").innerHTML += section;
}


//create Nav Bar Item
function createNavbar() {
    navList.innerHTML = " "  // we crete navbar from scratch when we add a section so we want to make sure that there is no data before we begain 
    document.querySelectorAll("section").forEach((section) => {
        const liItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link" id = "section${section.id}">
        ${section.dataset.nav}</a></li>`;
        navList.innerHTML += liItem;
    });
}


// we don't choose docment insted of navList becouse we need the funcnction apply only in the links sction 
// and to prefent null value show when click on any place on the window 

// smooth behaviour whn scroll to the target section
navList.addEventListener("click", (event) => {
    event.preventDefault();
    const id = event.target.dataset.nav;
    if (id != null) {
        document.getElementById(`${id}`).scrollIntoView({ behavior: "smooth" });
    }
});

// once the page load it will create navbar
createNavbar();









