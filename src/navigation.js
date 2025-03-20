// Navigation functionality for School Management System

document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and pages
    const menuItems = document.querySelectorAll('.sidebar-menu li a');
    const pages = document.querySelectorAll('.page');

    // Function to show a specific page and hide others
    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.style.display = 'none';
        });

        // Show the selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.style.display = 'block';
        }

        // Update active state in menu
        menuItems.forEach(item => {
            const parent = item.parentElement;
            if (item.getAttribute('data-page') === pageId) {
                parent.classList.add('active');
            } else {
                parent.classList.remove('active');
            }
        });
    }

    // Add click event listeners to all menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Show dashboard by default
    showPage('dashboard');

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
});