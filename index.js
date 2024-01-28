const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".btn-close");
const form = document.querySelector("form.registration");
const inputs = form.querySelectorAll("input.input-field");
const textArea = form.querySelector("textarea.input-field");
const submitBtn = form.querySelector("input.btn");
const congratsDiv = document.querySelector(".congrats");
console.log(inputs);
console.log(textArea);

const URL = "https://script.google.com/macros/s/AKfycbwHqIAi282iDtGo41oWrafarKzfT6U1F8_LWYD8zr4KCOd2J_LfTlQjNnuH3Im1OSru/exec";

form.addEventListener("submit", (e) => {
   e.preventDefault();
   submitBtn.value = "Registering...";
   let data = new FormData(form);
   fetch(URL, {
      method: "POST",
      body: data
   })
    .then(res => res.text())
    .then(data => console.log(data))
   inputs.forEach((input) => {
      input.value = "";
   });
   textArea.value = "";
   submitBtn.value = "Register";
   form.style.display = "none";
   congratsDiv.style.display = "block";
});

window.addEventListener("load", () => {
   congratsDiv.style.display = "none";
   setTimeout(() => {
      popup.style.display = "block";
   }, 2000);
});

btnClose.addEventListener("click", () => {
   popup.style.display = "none";
});
