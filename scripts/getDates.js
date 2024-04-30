function getCurrentYear() {
    var currentDate = new Date();
    return currentDate.getFullYear();
}

document.getElementById('currentDate').innerText += getCurrentYear();

var lastModified = new Date(document.lastModified);
document.getElementById('lastModified').innerText = lastModified;