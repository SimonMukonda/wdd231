const url = "data/members.json";

const directory = document.querySelector("#directory");

async function getMembers(){

const response = await fetch(url);

const data = await response.json();

displayMembers(data.members);

}

function displayMembers(members){

members.forEach(member => {

let card = document.createElement("div");
card.classList.add("member");

card.innerHTML = `
<img src="${member.image}" alt="${member.name}" width="200">
<h3>${member.name}</h3>
<p>${member.address}</p>
<p>${member.phone}</p>
<a href="${member.website}">Visit Website</a>
`;

directory.appendChild(card);

});

}

getMembers();

/* GRID / LIST */

document.querySelector("#gridBtn").addEventListener("click", ()=>{

directory.classList.add("grid");
directory.classList.remove("list");

});

document.querySelector("#listBtn").addEventListener("click", ()=>{

directory.classList.add("list");
directory.classList.remove("grid");

});

//  for my footer dont froget to place last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;