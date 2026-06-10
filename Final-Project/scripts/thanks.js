document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");

  const messageContainer = document.getElementById("thankMessage");

  if (name) {
    messageContainer.innerHTML = `
      <h1>Thank You, ${name}!</h1>
      <p>We've received your message and will get back to you shortly.</p>
      <p>In the meantime, feel free to explore more lessons and practice sessions.</p>
    `;
  } else {
    messageContainer.innerHTML = `
      <h1>Thank You!</h1>
      <p>Your form has been submitted successfully.</p>
    `;
  }
});
