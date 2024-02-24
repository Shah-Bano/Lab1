// Author: Shah Bano
// Date: 2024-02-05
// Description: This lab asked for a basic website where all text and images are injected through javascript
// References: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
//             https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples
//             https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

// This function is called after the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    
    var welcomeText = "Welcome to My Website";

    // This adds content to my page using the id I declared in the HTML file
    var homeWelcome = document.getElementById('home-page-text');

    // Without this, my text would not come up, so I saw online, can't find the reference, but checking if the element exists before and then adding the texts worked
    if (homeWelcome) {
        homeWelcome.textContent = welcomeText;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginBtn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the entered username
        var enteredUsername = document.getElementById('inputUsername').value;

        // Create a new list item with the username
        var newNavItem = document.createElement('li');
        newNavItem.className = 'nav-item';

        var newSpan = document.createElement('span');
        newSpan.className = 'navbar-text';
        newSpan.textContent = enteredUsername;

        newNavItem.appendChild(newSpan);

        // Insert the new list item after the "Contact" link
        var navbarNav = document.querySelector('.navbar-nav');
        navbarNav.children[4].after(newNavItem);

        // You can redirect the user to another page or perform other actions as needed
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Initializing the create media item function, it includes the title as a heading, the description as the p tag, and images
    function createMediaItem(title, description, imageUrl) {
        
        // I wanted my content to be structured in a way where two of the interests would be together on the first line and 3rd on the second.
        
        var mediaItem = document.createElement('div');
        mediaItem.classList.add('media-item');

        // Over here I'm creating the elements to ensure the right HTML tags are used for each
        var mediaTitle = document.createElement('h1');
        mediaTitle.textContent = title;

        var mediaDescription = document.createElement('p');
        mediaDescription.textContent = description;

        var mediaImage = document.createElement('img');
        // I used the URL, which is going to be used as taking the path of the images from my files, specifically the styles
        mediaImage.src = imageUrl;
    
        // Now each item will be added
        mediaItem.appendChild(mediaTitle);
        mediaItem.appendChild(mediaDescription);
        mediaItem.appendChild(mediaImage);

        return mediaItem;
    }

    // I'm injecting the content for my first two interests using the element id from the HTML file
    var mediaContainer = document.getElementById('media-container');

    // The data is inserted in order of declared parameters
    mediaContainer.appendChild(createMediaItem('Emergency Intercom - Podcast', 'A hilarious podcast about YouTubers Enya, Drew, and their cameraman, Kai.', './styles/interest1PODCAST.jpg'));
    mediaContainer.appendChild(createMediaItem('Coraline - Movie', 'A Tim Burton claymation classic with a unique and chilling storyline.', './styles/coralineInterest2.jpg'));

    var bottomMedia = document.getElementById('bottom-media');
    bottomMedia.appendChild(createMediaItem('Jazmin Bean - Artist', 'A unique artist with a diverse musical range from indie rock to pop.', './styles/jazminINTEREST.webp'));
});

// Service: 

document.addEventListener('DOMContentLoaded', function () {
    // Initializing the function, it includes the parameters later used for injecting text
    function createServiceItem(title, description, imageUrl, resumeLink) {
        
        // Using element id from the HTML
        var serviceItem = document.getElementById('service');

        var serviceTitle = document.createElement('h1');
        serviceTitle.textContent = title;

        var serviceDescription = document.createElement('p');
        serviceDescription.textContent = description;

        var serviceImage = document.createElement('img');
        serviceImage.src = imageUrl;

        // I put my resume on Google Drive and used create element a to put in my link for it to be functional
        var resumeAnchor = document.createElement('a');
        resumeAnchor.href = resumeLink;

        // This will be what is shown to the user rather than the link itself
        resumeAnchor.textContent = 'My Resume';

        // Add items to the container
        serviceItem.appendChild(serviceTitle);
        serviceItem.appendChild(serviceDescription);
        serviceItem.appendChild(serviceImage);
        serviceItem.appendChild(resumeAnchor);
    }

    // Executing the function, ensuring all data is entered through its parameters
    createServiceItem(
        'Programming, Web Design, Database Management',
        'I have taken college courses in computer programming and developed a keen interest in programming, web design, and database management.',
        './styles/programming.webp',
        'https://drive.google.com/file/d/1d0hVr1bDwvpFmrvkfAuM4fmUDRZgzcHt/view?usp=sharing'
    );
});

// About:

document.addEventListener('DOMContentLoaded', function () {
    // Use the id from HTML to add content
    var aboutContent = document.getElementById('about-content');

    // Creating an element to input text
    var aboutText = document.createElement('p');
    aboutText.textContent = "I'm an average person with basic interests like music, doodling, and annoying my friends and family. I enjoy a bit of philosophy/commentary content occasionally. As a full-time student and part-time job holder, I save my breaks for relaxation. Born in Pakistan, raised in the UAE, lived in Pakistan for 2 years, and now in Canada as an international student. It's pretty cold here, not complaining, just an observation.";

    // Image element for adding images. I used a more straightforward and easy to read way for this function. (don't have time to replace all lol)
    var aboutImage = document.createElement('img');
    aboutImage.src = './styles/idk.jpg';

    // Add the elements
    aboutContent.appendChild(aboutText);
    aboutContent.appendChild(aboutImage);
});

// Changing products link

document.addEventListener('DOMContentLoaded', function () {
    // Grabbing the element by its id
    var productsLink = document.getElementById('products-link');

    // First checking if it exists, then changing the text using .innerHTML
    if (productsLink) {
        productsLink.innerHTML = 'Interests';
    }
});

// Adding human resources

document.addEventListener('DOMContentLoaded', function () {
    // try to insert it within the list, so I chose create element to select all of them
    var humanResourcesLink = document.createElement('li');

    // Adding it to the nav-item list
    humanResourcesLink.add('nav-item');
});

// Footer:

document.addEventListener('DOMContentLoaded', function () {
    // Creating the footer navbar
    var fixedBottomNavbar = document.createElement('nav');
    fixedBottomNavbar.add('navbar', 'navbar-dark', 'bg-dark', 'fixed-bottom');

    // Create elements to input data
    var navbarContainer = document.createElement('div');
    navbarContainer.add('container-fluid');

    // Supposed to help in adding text within the element
    var copyrightText = document.createElement('span');
    copyrightText.add('navbar-text');
    copyrightText.textContent = '\u00A9 ' + 'Shah Bano 2024';

    // adding it to the BODY of the page since it is meant to be a part of it
    document.body.appendChild(fixedBottomNavbar);
});

// Form: 

function submitForm() {
    // Assign each item with a variable and select it using the getElementById method
    var name = document.getElementById('name').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Any data that is input will just print to the console
    console.log(name);
    console.log(contactNumber);
    console.log(email);
    console.log(message);

    // This will redirect the user to the home page after 3 seconds
    setTimeout(function () {
        window.location.href = './index.html'; 
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    // Hide the error message div on page load
    var errorMessage = document.getElementById('ErrorMessage');

    if (errorMessage) {
        errorMessage.style.display = 'none';
    }

    var registerForm = document.querySelector('.register-form form');

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (validateEmptyForm()) {
                errorMessage.style.display = 'none';
            } else {
                errorMessage.style.display = 'block';
            }
        });
    }
});

function validateEmptyForm() {
    var emailInput = document.getElementById('inputEmail');
    var email = emailInput.value.trim();
    
    if (email === "") {
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    var errorMessage = document.getElementById('ErrorMessage');

    if (errorMessage) {
        errorMessage.style.display = 'none';
    }

    var registerForm = document.querySelector('.register-form form');

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (validateForm()) {
                errorMessage.style.display = 'none';
            } else {
                errorMessage.style.display = 'block';
            }
        });
    }

    function validateForm() {
        var firstNameInput = document.getElementById('inputFirstName');
        var lastNameInput = document.getElementById('inputLastName');
        var emailInput = document.getElementById('inputEmail');
        var passwordInput = document.getElementById('inputPasswordR');
        var confirmPasswordInput = document.getElementById('inputConfirmPassword');

        var firstName = firstNameInput.value.trim();
        var lastName = lastNameInput.value.trim();
        var email = emailInput.value.trim();
        var password = passwordInput.value.trim();
        var confirmPassword = confirmPasswordInput.value.trim();

        if (firstName.length < 2 || lastName.length < 2) {
            return false;
        }

        if (email.length < 8 || !email.includes('@')) {
            return false;
        }

        if (password.length < 6 || password !== confirmPassword) {
            return false;
        }

        return true; 
    }
});
