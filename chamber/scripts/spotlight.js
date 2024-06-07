const baseURL = "https://lauralizz.github.io/wdd230/chamber/";
const linksURL = "https://lauralizz.github.io/wdd230/chamber/data/members.json";
const spotlightSection = document.getElementById('spotlights');


function getRandomMembers(members, count) {
    const filteredMembers = members.filter(member => 
        member.memLevel === "Gold Membership" || member.memLevel === "Silver Membership"
    );
    const shuffledMembers = filteredMembers.sort(() => Math.random() - 0.5);
    const selectedMembers = shuffledMembers.slice(0, count);

    return selectedMembers;
}

function displaySpotlights(members) {
    spotlightSection.innerHTML = '';

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('spotlight');

        let businessAddress = document.createElement('p');
        let businessPhone = document.createElement('p');

        const memberImage = document.createElement('img');
        memberImage.src = baseURL + member.image;
        memberImage.alt = member.name;
        memberImage.classList.add('responsive-img');

        const memberButton = document.createElement('button');
        memberButton.classList.add('button');
        const memberLink = document.createElement('a');
        memberLink.href = member.url;
        memberLink.textContent = member.name;
        memberButton.appendChild(memberLink);

        const memberDescription = document.createElement('p');
        businessAddress.textContent = `Address: ${member.address}`;
        businessPhone.textContent = `Phone Number: ${member.phoneNumber}`;

        memberDiv.appendChild(memberImage);
        memberDiv.appendChild(memberButton);
        memberDiv.appendChild(businessAddress);
        memberDiv.appendChild(businessPhone);
        memberDiv.appendChild(memberDescription);

        spotlightSection.appendChild(memberDiv);
    });
}

async function getMembersData() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        const randomMembers = getRandomMembers(data.members, 2);
        displaySpotlights(randomMembers);
    } catch (error) {
        console.error("Error fetching members data: ", error);
    }
}

document.addEventListener('DOMContentLoaded', getMembersData);
