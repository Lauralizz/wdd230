function getCurrentYear() {
    var currentDate = new Date();
    return currentDate.getFullYear();
}

document.getElementById('currentDate').innerText += getCurrentYear();

var lastModified = new Date(document.lastModified);
document.getElementById('lastModified').innerText = lastModified;

// Function to set the current date and time as the value of the hidden timestamp field
function setTimestamp() {
    var now = new Date();
    var formattedDateTime = now.toISOString(); // Format date to ISO string
    document.getElementById('timestamp').value = formattedDateTime;
}

// Call setTimestamp function when the window loads
window.onload = setTimestamp;