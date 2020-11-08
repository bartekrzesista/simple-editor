import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const text = document.querySelector(".editor__textarea");
const saveText = document.querySelector(".editor__btn-save");
const loadText = document.querySelector(".editor__btn-load");

saveText.addEventListener("click", () => {
    localStorage.setItem("editor-text", text.value);
});

loadText.addEventListener("click", () => {
    text.value = localStorage.getItem("editor-text");
});