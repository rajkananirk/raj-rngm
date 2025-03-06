/* Show tooltip JS starts */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
/* Show tooltip JS ends */

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
                $showPasswordLink.attr('aria-checked', 'true');
                $showPasswordLinkImage.attr('src', '/portal/tenant/elevancehealth/images/password-show.svg');
            } else {
                $passwordInput.attr('type', 'password');
                $showPasswordLinkText.text('Show');
                $showPasswordLink.attr('aria-checked', 'false');
                $showPasswordLinkImage.attr('src', '/portal/tenant/elevancehealth/images/password-hide.svg');
            }
        });
    });
});

$(document).ready(function () {
    $('#Password').on('keyup', function () {
        var count = $('.password-rules li.valid').length;
        $('#valid-count').text(count + ' out of 5 requirements completed');
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
    var skipButton = document.getElementById('skip-to-content-btn');
    var mainContent = document.getElementById('main-content');
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
let path = window.location.pathname;
 
let link = document.querySelector(`.navbar a[href="${path}"]`);
 
if (link) {
    link.setAttribute('aria-current', 'page');
}
/* Add current page in navigation code ends */

/* Hightlight selected menu */
$(document).ready(function () {
    // Get the current URL path
    var currentUrl = window.location.pathname;

    if (window.location.pathname.includes('contact')) {
        $('#linkContact').addClass('active');
    }
    else if (window.location.pathname.includes('training') || window.location.pathname.includes('faqs')) {
        $('#dropResources').addClass('active');
    }
    else if (window.location.pathname.includes('about') || window.location.pathname.includes('service') || window.location.pathname.includes('partners-employers')) {
        $('#dropAboutUs').addClass('active');
    }
   
    else {
        $('#linkHome').addClass('active');
    }
});
/* END: Hightlight selected menu */