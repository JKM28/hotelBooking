$(document).ready(function() {
    console.log("Document is ready."); // Check if this runs

    $('#browse-btn').click(function() {
        console.log("Browse button clicked."); // Check if the button click is registered
        $('#hotel-list-section').slideToggle();
    });

    // Log when details are clicked
    $('.details').on('click', function(e) {
        e.stopPropagation(); // Prevents the click from bubbling up

        // Get the hotel name from the closest anchor element
        var hotelName = $(this).closest('.img-container').find('a').data('hotel'); 
        console.log("Details clicked for: " + hotelName); // Log hotel name

        // Set the hotel name in the modal and show it
        $('#availabilityModal').modal('show');
        $('#availabilityModal').data('hotel-name', hotelName).find('.modal-title').text('Check Availability for ' + hotelName);
        $('#availabilityModal').find('#selected-hotel').val(hotelName);
        
        // Update hotel location
        var hotelLocations = {
            "Oasis Hotel": "Butuan City, Philippines",
            "Inland Hotel": "Butuan City, Philippines",
            "Watergate Hotel": "Butuan City, Philippines",
            "Hotel 4": "Butuan City, Philippines",
            "Hotel 5": "Butuan City, Philippines",
            "Hotel 6": "Butuan City, Philippines",
            "Hotel 7": "Butuan City, Philippines",
            "Hotel 8": "Butuan City, Philippines",
        };

        $('#availabilityModal').find('#hotel-location').val(hotelLocations[hotelName]);
    });

    // New functionality for See in Maps button
    $('#see-map-btn').on('click', function() {
        const location = $('#hotel-location').val();
        const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location)}`; // Replace YOUR_API_KEY with your Google Maps API key
        $('#map-iframe').attr('src', mapUrl); // Set the iframe src to the map URL
        $('#mapModal').modal('show'); // Show the map modal
    });

    // Clear iframe when closing the map modal
    $('#mapModal').on('hidden.bs.modal', function () {
        $('#map-iframe').attr('src', ''); // Clear the iframe source on close to stop loading
    });

    $('#availability-form').on('submit', function(e) {
        e.preventDefault();
        alert('Checking availability for ' + $('#selected-hotel').val());
        $('#availabilityModal').modal('hide');
    });
});
$(document).ready(function() {
    // Smooth scrolling for the About Us link
    $('.navbar-nav .nav-link').on('click', function(event) {
        // Check if the clicked link is the "About" link
        if ($(this).attr('href') === '#about-us') {
            event.preventDefault(); // Prevent default anchor click behavior
            $('html, body').animate({
                scrollTop: $('#about-us').offset().top // Scroll to the About Us section
            },700); // Animation duration in milliseconds
        }
    });
});

$(window).on('scroll', function() {
    $('.about-us-section').each(function() {
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > top_of_object) {
            $(this).animate({'opacity': '1'}, 800); // Fade in
        }
    });
});
$(document).ready(function() {
    // Smooth scrolling for the About Us link
    $('.navbar-nav .nav-link').on('click', function(event) {
        // Check if the clicked link is the "About" link
        if ($(this).attr('href') === '#contact') {
            event.preventDefault(); // Prevent default anchor click behavior
            $('html, body').animate({
                scrollTop: $('#contact').offset().top // Scroll to the About Us section
            },700); // Animation duration in milliseconds
        }
    });
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This enables smooth scrolling
    });
}

// Show or hide the "Scroll to Top" button based on scroll position
window.onscroll = function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    // Check if the page is scrolled down more than 100 pixels
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'flex'; // Show button
    } else {
        scrollToTopButton.style.display = 'none'; // Hide button
    }
};










