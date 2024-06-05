const baseURL = "https://lauralizz.github.io/wdd230/chamber/";
const linksURL = "https://lauralizz.github.io/wdd230/chamber/data/members.json";
const membersSection = document.getElementById('membersContainer');

async function getMembersData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let businessName = document.createElement('h4');
        let portrait = document.createElement('img');
        let businessAddress = document.createElement('p');
        let businessPhone = document.createElement('p');

        businessName.textContent = `${member.name}`;
        portrait.setAttribute('src', member.image);
        businessAddress.textContent = `Address: ${member.address}`;
        businessPhone.textContent = `Phone Number: ${member.phoneNumber}`;

        card.appendChild(businessName);
        card.appendChild(portrait);
        card.appendChild(businessAddress);
        card.appendChild(businessPhone);

        membersSection.appendChild(card);
    });
}

// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', (event) => {
    getMembersData();
});