// Function to set the active class based on the current URL
function setActiveNavLink() {
    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Select all nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Loop through nav links and add 'active' class to the one matching the current page
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call the function when the page loads
window.addEventListener('load', setActiveNavLink);
