const courseDetails = document.querySelector("#course-details");

function displayCourseDetails(course) {
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.code}</h2>
    <h3>${course.name}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Completed</strong>: ${course.completed ? "Yes" : "No"}</p>
  `;
  courseDetails.showModal();

  document.querySelector("#closeModal").addEventListener("click", () => {
    courseDetails.close();
  });
}

