

// Nav Toggle Function
// This code defines a function and sets up event listeners for a navigation menu.

// The function elemToggleFunc and takes in one parameter/argument "elem". When called, it toggles the "active" class on the element passed in as an argument.
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); };


// Navbar Variable
// The code selects four elements from the DOM using the document.querySelector method.
const navbar = document.querySelector('[data-navbar]');
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const overLay = document.querySelector('[data-overlay]');
const menuIcon = document.querySelector('[data-menuIcon]');

// An array navElemArr is then defined with navToggleBtn and overLay as its elements.
const navElemArr = [navToggleBtn, overLay];



// A for loop used to iterate over each element in navElemArr and add a click event listener to it. The event listener triggers the elemToggleFunc function, passing in the navbar and overLay elements as arguments to toggle their "active" class.
for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener('click', function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overLay);
        // Toggles the menu icon class on click
        menuIcon.classList.toggle("fa-xmark");
        console.log(i);
    });
};


// When the button or overlay is clicked, the elemToggleFunc function is called to toggle the "active" class on the navbar and overlay elements.


// ========================Header Sticky
// In summary, this code is used to create a fixed header that appears when the user scrolls up the page and disappears when the user scrolls down. The active class is added or removed from the header element depending on the user's scroll direction.

// The HTML element with a [data-header] attribute is selected and stored in the header variable.
const header = document.querySelector("[data-header]");

let lastScrollPosition = 0;
// A variable lastScrollPosition is initialized to 0 to store the scroll position of the user.

// An event listener is added to the window object that listens for the "scroll" event. When the user scrolls the window, this event will be fired. 
window.addEventListener("scroll", function () {
    // When the "scroll" event is fired, an anonymous function is called which gets the current scrollPosition of the user using the window.scrollY property.
    let scrollPosition = window.scrollY;

    // The if statement checks if the current scrollPosition is greater than the lastScrollPosition. If it is, the active class is removed from the header element.
    if (scrollPosition > lastScrollPosition) {
        header.classList.remove('active');
    } else {
        // If the scrollPosition is less than or equal to the lastScrollPosition, the else statement adds the active class to the header.
        header.classList.add('active');
    }

    // The lastScrollPosition is updated to the current scrollPosition.
    lastScrollPosition = scrollPosition;

    // OR
    // The lastScrollPosition is updated to the current scrollPosition but if less than or equal to 0, in which case it is set to 0 to prevent negative values.
    // lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
    // console.log(scrollPosition);
    // console.log(lastScrollPosition);
});



/* ------------------------- */
/* #FormValidation */
/* ------------------------- */

const input = document.querySelector("[data-input]");
const submitBtn = document.querySelector("[data-submit]");

// An event listener is added to the input element that listens for the "input" event. When the user enters input into the input element, this event will be fired.
input.addEventListener("input", function () {

    // When the "input" event is fired, an anonymous function is called which checks the validity of the input element using the checkValidity() method.
    if (input.checkValidity()) {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", "");
    }
});

// In summary, this code is used to enable or disable a submit button based on the validity of an input field. If the input is valid, the submit button is enabled, and if it's not, the submit button is disabled.


/* ------------------------- */
/* #Go-To-Top */
/* ------------------------- */


// If the vertical scroll position is greater than or equal to 200 pixels, the active class is added to the goTopBtn element using goTopBtn.classList.add("active"). This will make the button visible.

// If the vertical scroll position is less than 200 pixels, the active class is removed from the goTopBtn element using goTopBtn.classList.remove("active"). This will hide the button.

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    window.scrollY >= 200 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
});


// In summary, this code is used to show or hide a "Go to top" button based on the user's scroll position on the webpage. If the user has scrolled down the page by at least 200 pixels, the button is displayed, and if not, it's hidden.


