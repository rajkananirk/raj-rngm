/* Show tooltip JS starts */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
/* Show tooltip JS ends */

/* Start: Restrict TAB index in mobile menu for other content */
$(document).ready(function () {
    var focusableElements = $('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    var originalTabindex = [];

    function saveOriginalTabindex() {
        focusableElements.each(function () {
            var tabindex = $(this).attr('tabindex');
            originalTabindex.push(tabindex !== undefined ? tabindex : null);
        });
    }

    function setTabindex(value) {
        focusableElements.each(function (index) {
            if (!$(this).closest('.navbar').length) {
                $(this).attr('tabindex', value);
            }
        });
    }

    $('.navbar-toggler').on('click', function () {
        var isExpanded = $(this).attr('aria-expanded') === 'true';
        if (isExpanded) {
            saveOriginalTabindex();
            setTabindex('-1');
        } else {
            setTabindex(function (index) {
                return originalTabindex[index];
            });
        }
    });

    // Close menu and restore focus when clicking outside of the menu
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.navbar').length) {
            if ($('.navbar-toggler').attr('aria-expanded') === 'true') {
                $('.navbar-toggler').click();
            }
        }
    });
});
/* END: Restrict TAB index in mobile menu for other content */

$(document).ready(function () {
    $('.password-field').each(function () {
        var $passwordField = $(this);
        var $showPasswordLink = $passwordField.find('.show-password');
        var $showPasswordLinkText = $passwordField.find('.show-password span');
        var $showPasswordLinkImage = $passwordField.find('.show-password img');
        var $passwordInput = $passwordField.find('input[type="password"]');

        $showPasswordLink.on('click', function () {
            var currentType = $passwordInput.attr('type');
            if (currentType === 'password') {
                $passwordInput.attr('type', 'text');
                $showPasswordLinkText.text('Hide');
                // $showPasswordLink.attr('aria-checked', 'true');
                $showPasswordLinkImage.attr('src', '/portal/tenant/elevancehealth/images/password-show.svg');
            } else {
                $passwordInput.attr('type', 'password');
                $showPasswordLinkText.text('Show');
                // $showPasswordLink.attr('aria-checked', 'false');
                $showPasswordLinkImage.attr('src', '/portal/tenant/elevancehealth/images/password-hide.svg');
            }
        });
    });
});
 
// Accessibility  bar //
$(document).ready(function () {
    // Set initial zoom level
    var minZoom = 0.9;
    var zoomLevel = 1.0;
    var maxZoom = 1.1;

    $('#decreaseZoomLevel').on('click', function () {
        if (zoomLevel > minZoom) {
            zoomLevel -= 0.05;
            $('body').css('zoom', zoomLevel);
        }
    });
    $('#regularZoomLevel').on('click', function () {
        zoomLevel = 1;
        $('body').css('zoom', '1');
    });
    $('#increaseZoomLevel').on('click', function () {
        if (zoomLevel < maxZoom) {
            zoomLevel += 0.05;
            $('body').css('zoom', zoomLevel);
        }
    });

    function addClassToBody() {
        $('body').addClass('high-contrast');
        localStorage.setItem('addedClass', 'high-contrast');
        console.log('Class added to body:', 'high-contrast');
    }
    // Function to remove a variable from local storage
    function removeFromLocalStorage() {
        $('body').removeClass('high-contrast');
        localStorage.removeItem("addedClass");
        console.log("Variable removed from local storage:");
    }
    // Check if the class is already added on page load
    var storedClass = localStorage.getItem('addedClass');
    if (storedClass) {
        $('body').addClass(storedClass);
        console.log('Class added to body from local storage:', storedClass);
    }
    $('#addContrast').on('click', function () {
        addClassToBody();
    });
    $('#removeContrast').on('click', function () {
        removeFromLocalStorage();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var skipButton = document.getElementById('skip-to-content');
    var mainContent = document.getElementById('content');
    var headerHeight = document.querySelector('header').offsetHeight;

    if (skipButton !== null && skipButton !== undefined) {
        skipButton.addEventListener('click', function () {
            // Adjust scroll position to account for fixed header
            var scrollPosition = mainContent.offsetTop - headerHeight;

            // Set tabindex and focus on main content
            mainContent.tabIndex = -1;
            mainContent.focus();

            // Scroll to adjusted position
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        });
    }
});
 



/* Add current page in navigation code starts */
// Get the current URL path
let path = window.location.pathname;

// Select the navigation link that matches the current path
let link = $('.navbar-nav a[href="' + path + '"]');

// Add aria-current="page" to the selected link
if (link.length) {
    link.attr('aria-current', 'page');
}
/* Add current page in navigation code ends */