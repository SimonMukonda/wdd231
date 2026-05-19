async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();

        const container = document.querySelector("#spotlights");

       
        const qualified = data.members.filter(member =>
            member.membership === 2 || member.membership === 3
        );

        
        const shuffled = qualified.sort(() => 0.5 - Math.random());

        
        const selected = shuffled.slice(0, 4);

        selected.forEach(member => {

            const div = document.createElement("div");
            div.classList.add("spotlight-card");

            div.innerHTML = `
                <img src="${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><strong>${member.membership === 3 ? "Gold Member" : "Silver Member"}</strong></p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        document.querySelector("#spotlights").innerHTML =
            "<p>⚠️ Spotlight unavailable</p>";
        console.error(error);
    }
}

loadSpotlights();