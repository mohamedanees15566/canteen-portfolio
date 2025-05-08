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



// Function to toggle the menu sections based on click     this funtion is nor work
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
