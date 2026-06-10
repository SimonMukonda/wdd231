import { getData } from "./storage.js";
import { openModal, closeModal } from "./modal.js";
import { getLessons } from "./api_lessons.js";

const runBtn = document.querySelector("#runCode");
const input = document.querySelector("#codeInput");
const output = document.querySelector("#output");
const savedLessonsDropdown = document.querySelector("#savedLessons");
const lessonSnippetDiv = document.querySelector("#lessonSnippet");

let lessons = [];



// Populate dropdown with only saved lessons
async function loadSavedLessons() {
  lessons = await getLessons();
  const saved = getData("saved") || [];

  savedLessonsDropdown.innerHTML = "<option value=''>-- Select a lesson --</option>";

  saved.forEach(title => {
    const lesson = lessons.find(l => l.title === title);
    if (lesson) {
      const option = document.createElement("option");
      option.value = lesson.title;
      option.textContent = lesson.title;
      savedLessonsDropdown.appendChild(option);
    }
  });
}



// When user selects a lesson, show snippet under "Try Coding"
savedLessonsDropdown.addEventListener("change", () => {
  const selected = savedLessonsDropdown.value;
  const lesson = lessons.find(l => l.title === selected);
  if (lesson) {
    lessonSnippetDiv.innerHTML = `
      <h3>${lesson.title} Example</h3>
      <pre><code>${lesson.snippet.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
      <p>Copy this into the editor below or type it out and run it!</p>
    `;
  } else {
    lessonSnippetDiv.innerHTML = "";
  }
});



// Run code button
runBtn.addEventListener("click", () => {
  output.srcdoc = input.value;
  localStorage.setItem("code", input.value);
});



// Restore last code on page load
window.onload = () => {
  loadSavedLessons();
};



// Modal logic
const modal = document.querySelector("#modal");
const openBtn = document.querySelector("#openModal");
const closeBtn = document.querySelector("#closeModal");

openBtn.addEventListener("click", () => openModal(modal));
closeBtn.addEventListener("click", () => closeModal(modal));


// Motivation button logic
const motivationBtn = document.querySelector("#motivationBtn");
const motivationBox = document.querySelector("#motivationBox");

motivationBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    motivationBox.innerHTML = `
      <p><strong>Motivation:</strong> "${data.slip.advice}"</p>
    `;
  } catch (error) {
    motivationBox.innerHTML = "<p>Could not load advice. Try again later.</p>";
  }
});
