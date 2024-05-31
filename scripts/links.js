const baseURL = "https://lauralizz.github.io/wdd230/";
const linksURL = "https://lauralizz.github.io/wdd230/data/links.json";
const learningActivitiesSection = document.getElementById('linksContainer');

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        displayLinks(data);
    } catch (error) {
        console.error('Error fetching the links:', error);
    }
}

function displayLinks(data) {
    data.weeks.forEach(week => {
        const weekDiv = document.createElement('div');
        const weekHeading = document.createElement('h3');
        weekHeading.textContent = week.week;
        weekDiv.appendChild(weekHeading);

        const linksList = document.createElement('ul');

        week.links.forEach(link => {
            const linkItem = document.createElement('li');
            const linkAnchor = document.createElement('a');
            linkAnchor.href = `${baseURL}${link.url}`;
            linkAnchor.textContent = link.title;
            linkItem.appendChild(linkAnchor);
            linksList.appendChild(linkItem);
        });

        weekDiv.appendChild(linksList);
        learningActivitiesSection.appendChild(weekDiv);
    });
}

getLinks();