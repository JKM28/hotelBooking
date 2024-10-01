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
