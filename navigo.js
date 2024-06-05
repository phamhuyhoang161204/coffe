import Navigo from "navigo";
import home from "./asm/html/home.html?raw";
const router = new Navigo("/");

function home() {
  document.getElementById("app").innerHTML = home;
}

function renderAbout() {
  document.getElementById("app").innerHTML = "About";
}

function renderContact() {
  document.getElementById("app").innerHTML = "Contact";
}

router
.on("/", () => {
  home();
})

  .resolve();
