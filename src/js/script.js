document.body.style.cursor = 'none';

// Cursor animation
let mouseCursor = document.querySelector(".cursor");
let mouseEffect = document.querySelectorAll(".main");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY +'px';
  mouseCursor.style.left = e.pageX +'px';
}

mouseEffect.forEach(link => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursor-grow");
    link.classList.add("hovered-cursor");
  })
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-grow");
    link.classList.remove("hovered-cursor");
  })
})

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

//  Store color theme for future visits
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
