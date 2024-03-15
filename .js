document.addEventListener("DOMContentLoaded", function() {
    const packagesLink = document.getElementById("packages-link");
    const flightBookingLink = document.getElementById("flight-booking-link");
    const hotelBookingLink = document.getElementById("hotel-booking-link");
    const packagesSection = document.getElementById("packages-section");
    const flightSection = document.getElementById("flight-section");
    const hotelSection = document.getElementById("hotel-section");

    packagesLink.addEventListener("click", function(event) {
        event.preventDefault();
        packagesSection.style.display = "block";
        flightSection.style.display = "none";
        hotelSection.style.display = "none";
    });

    flightBookingLink.addEventListener("click", function(event) {
        event.preventDefault();
        packagesSection.style.display = "none";
        flightSection.style.display = "block";
        hotelSection.style.display = "none";
    });

    hotelBookingLink.addEventListener("click", function(event) {
        event.preventDefault();
        packagesSection.style.display = "none";
        flightSection.style.display = "none";
        hotelSection.style.display = "block";
    });

    const backToHomeButton = document.getElementById("back-to-home");
    const backToPackagesButton = document.getElementById("back-to-packages");
    const backToFlightButton = document.getElementById("back-to-flight");
    const homeLink = document.getElementById("home-link"); // Add this line to select the Home link

    backToHomeButton.addEventListener("click", function() {
        packagesSection.style.display = "none";
        flightSection.style.display = "none";
        hotelSection.style.display = "none";
    });

    backToPackagesButton.addEventListener("click", function() {
        packagesSection.style.display = "block";
        flightSection.style.display = "none";
        hotelSection.style.display = "none";
    });

    backToFlightButton.addEventListener("click", function() {
        packagesSection.style.display = "none";
        flightSection.style.display = "block";
        hotelSection.style.display = "none";
    });

    const hotelSearchForm = document.getElementById("hotel-search-form");
    const hotelResults = document.getElementById("hotel-results");

    hotelSearchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Here you can add code to handle hotel search and display results
    });

    // Event listener for the Home link
    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        const homeSection = document.getElementById("home-section");
        // Scroll to the home section
        homeSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});
