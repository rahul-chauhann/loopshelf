
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});


const shelfImages = [
  "./images/frontpage.jpeg",
  "./images/image.png",
  "./images/image2.jpeg",
  "./images/image3.jpeg"
];

let currentSlide = 0;

function showSlide(index) {
  currentSlide =
    (index + shelfImages.length) % shelfImages.length;

  const image = document.getElementById("shelf-image");
  const count = document.getElementById("slide-count");

  if (image) {
    image.src = shelfImages[currentSlide];
  }

  if (count) {
    count.textContent =
      String(currentSlide + 1).padStart(2, "0") +
      " / " +
      String(shelfImages.length).padStart(2, "0");
  }
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}