document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('closeBanner');

    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const today = new Date().getDay();

    // Show the banner only on Mondays (1), Tuesdays (2), and Wednesdays (3)
    if (today === 1 || today === 2 || today === 3) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }

    // Add click event listener to the close button
    closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});