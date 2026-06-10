import { saveData, getData } from "./storage.js";

const container = document.querySelector("#lessonsContainer");

async function getLessons() {
  try {
    const response = await fetch("data/lessons.json");
    const data = await response.json();
    displayLessons(data);
  } catch (error) {
    console.error("Error fetching lessons:", error);
  }
}

function displayLessons(lessons) {
  container.innerHTML = lessons.map(lesson => {
    const saved = getData("saved") || [];
    const isSaved = saved.includes(lesson.title);

    return `
      <div class="card">
        <h3>${lesson.title}</h3>
        <p>${lesson.description}</p>
        <p><strong>Level:</strong> ${lesson.level}</p>
        <p><strong>Topic:</strong> ${lesson.topic}</p>
        ${isSaved 
          ? `<button disabled>Saved</button>
             <button onclick="unsaveLesson('${lesson.title}')">Unsave</button>`
          : `<button onclick="saveLesson('${lesson.title}')">Save</button>`}
      </div>
    `;
  }).join("");
}

export function saveLesson(title) {
  let saved = getData("saved") || [];

  if (!saved.includes(title)) {
    saved.push(title);
    saveData("saved", saved);
  }

  // Re-render lessons so UI updates
  getLessons();
}

export function unsaveLesson(title) {
  let saved = getData("saved") || [];

  // Remove the lesson from saved list
  saved = saved.filter(item => item !== title);
  saveData("saved", saved);

  // Re-render lessons so UI updates
  getLessons();
}

// Make functions global for inline onclick bec im using on click instead of eventlistners
window.saveLesson = saveLesson;
window.unsaveLesson = unsaveLesson;

// Initialize lessons on page load
getLessons();
