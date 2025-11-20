const images = ["https://i.pinimg.com/736x/2a/d5/c8/2ad5c843fc7ff720cb7023e2e9f81b07.jpg",
     "https://i.pinimg.com/736x/22/4e/88/224e88f9b7ea00d71a7f7a7a159040b6.jpg", "https://i.pinimg.com/736x/18/c3/fa/18c3faa45f48ce1ed57781b7d4923aea.jpg"];
let currentIndex = 0;

const photo = document.getElementById("photo");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  photo.style.transform = "rotateY(180deg)"; 
  setTimeout(() => {
    photo.src = images[currentIndex];
    photo.style.transform = "rotateY(0deg)";
  }, 250);
});
