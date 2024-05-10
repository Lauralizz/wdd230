const visitsDisplay = document.querySelector(".visits");
const msToDays = 84600000;

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
const currentDate = Date.now();

if (numVisits === 0) {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else {
    const lastVisitTime = Number(window.localStorage.getItem("lastVisitTime-ls")) || 0;
    const timeDifference = currentDate - lastVisitTime;
    
    if (timeDifference < msToDays) {
        visitsDisplay.textContent = `Back so soon! Awesome!`;
    } else {
        const daysDifference = Math.floor(timeDifference / msToDays);
        const pluralSuffix = daysDifference === 1 ? '' : 's';
        visitsDisplay.textContent = `You last visited ${daysDifference} day${pluralSuffix} ago.`;
    }
}

window.localStorage.setItem("lastVisitTime-ls", currentDate);
numVisits++;
window.localStorage.setItem("numVisits-ls", numVisits);