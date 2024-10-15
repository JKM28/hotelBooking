$(document).ready(function() {
    console.log("Document is ready.");

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

    // Update hotel price
    var hotelPrices = {
        "Oasis Hotel": "₱3,800",
        "Inland Hotel": "₱4,000",
        "Watergate Hotel": "₱3,800",
        "Hotel 4": "₱2,500",
        "Hotel 5": "₱5,200",
        "Hotel 6": "₱6,000",
        "Hotel 7": "₱4,800",
        "Hotel 8": "₱3,200",
    };

    $('#hotel-price').text(hotelPrices[hotelName]); // Set the price dynamically
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

    // Availability form submit
    $('#availability-form').on('submit', function(e) {
        e.preventDefault(); // Prevent form submission
        const hotelName = $('#selected-hotel').val(); // Get selected hotel name
        alert('Checking availability for ' + hotelName); // Show alert

        // Show confirmation message and confirm button
        $('#confirmation-message').text('Your booking for ' + hotelName + ' is confirmed!').show();
        $('#confirm-btn').show(); // Show the Confirm Booking button
    });
    
    $('#availabilityModal .btn-close, #availabilityModal .btn-secondary').on('click', function() {
        $('#availabilityModal').modal('hide');
    });
    
    $('#mapModal .btn-close, #mapModal .btn-secondary').on('click', function() {
        $('#mapModal').modal('hide');
    });
    
    // Confirm button functionality
    $('#confirm-btn').on('click', function() {
        const hotelName = $('#selected-hotel').val(); // Get selected hotel name
        alert('Booking confirmed for ' + hotelName); // Show confirmation alert
        
        // Reset the form
        $('#availability-form')[0].reset();
        $('#confirmation-message').hide(); // Hide confirmation message
        $('#confirm-btn').hide(); // Hide confirm button
        $('#availabilityModal').modal('hide'); // Close the modal after confirming

        // Optionally, you can redirect to a booking confirmation page
        // window.location.href = 'confirmation-page.html';
    });

    // Arrow toggle functionality for Browse button
    document.getElementById('browse-btn').addEventListener('click', function() {
        var arrow = document.querySelector('#arrow-container .arrow-down, #arrow-container .arrow-up');
        var hotelListSection = document.getElementById('hotel-list-section');
        
        // Toggle arrow direction
        if (arrow.classList.contains('arrow-down')) {
            arrow.classList.remove('arrow-down');
            arrow.classList.add('arrow-up');
        } else {
            arrow.classList.remove('arrow-up');
            arrow.classList.add('arrow-down');
        }
    
        // Show or hide hotel list section
        if (hotelListSection.style.display === 'none' || hotelListSection.style.display === '') {
            hotelListSection.style.display = 'block';
        } else {
            hotelListSection.style.display = 'none';
        }
    });

    $('.navbar-nav .nav-link').on('click', function(event) {
        const targetId = $(this).attr('href');
        if (targetId === '#about-us' || targetId === '#contact') {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(targetId).offset().top
            }, 700);
        }
    });

    $(window).on('scroll', function() {
        $('.about-us-section').each(function() {
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > top_of_object) {
                $(this).animate({'opacity': '1'}, 800);
            }
        });
    });

    // Scroll-to-top button functionality
    let scrollToTopButton = document.getElementById('scroll-to-top');
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.onscroll = function() {
        if (scrollToTopButton) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        } else {
            console.error("Element with ID 'scroll-to-top' not found.");
        }
    };

    // Add click event for scroll-to-top button
    scrollToTopButton.onclick = scrollToTop;

});
