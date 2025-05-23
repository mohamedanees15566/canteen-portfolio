//video
window.addEventListener('load', () => {
    const video = document.createElement('video');
    video.src = '12(1).mp4';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    document.getElementById('first-section').appendChild(video);
});


// Function to handle the "Explore More" button click event
document.addEventListener('DOMContentLoaded', function () {
    const exploreButton = document.getElementById('explore-btn');

    if (exploreButton) {
        exploreButton.addEventListener('click', function () {
            const targetSection = document.getElementById('trd-section');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});



// Function to toggle the menu sections based on click  
document.addEventListener('DOMContentLoaded', function () {
    const menuButtons = document.querySelectorAll('.btnc');

    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            const cardTitle = this.closest('.menu-item').querySelector('.card-title');
            if (cardTitle) {
                alert('You selected: ' + cardTitle.textContent);
            } else {
                alert('No card title found!');
            }
        });
    });
});

// Subscribe button functionality
const subscribeButton = document.querySelector('.sub-bt');

subscribeButton.addEventListener('click', function () {
    const email = document.getElementById('floatingInputDisabled').value;
    const comment = document.getElementById('floatingTextareaDisabled').value;

    if (email && comment) {
        alert('Thanks for subscribing with your email: ' + email + ' and your comments: ' + comment);
    } else {
        alert('Please enter both email and comments!');
    }
});
;


// sign in up 
document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.getElementById("signin-form");
    const signUpForm = document.getElementById("signup-form");

    if (signInForm) {
        signInForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Signed In Successfully!");
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Signed Up Successfully!");
        });
    }
});


// ckeck out 
let quantity = 1;
const quantityDisplay = document.getElementById('quantity');
const itemPrice = 990;
const itemPriceDisplay = document.getElementById('item-price');
const subtotalDisplay = document.getElementById('subtotal');
const totalDisplay = document.getElementById('total');

function updatePrices() {
    itemPriceDisplay.textContent = itemPrice * quantity;
    subtotalDisplay.textContent = itemPrice * quantity;
    totalDisplay.textContent = itemPrice * quantity;
    quantityDisplay.textContent = quantity;
}

function increaseQty() {
    quantity++;
    updatePrices();
}

function decreaseQty() {
    if (quantity > 1) {
        quantity--;
        updatePrices();
    }
}

