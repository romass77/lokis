let slideIndex = 1;
showSlides(slideIndex);

function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
  const currentDate = new Date();
  const dateElement = document.getElementById("current-date");
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = currentDate.toLocaleDateString('lt-LT', options);
});

const toggleMenu = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");

toggleMenu.addEventListener("click", function() {
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});
