function showMessage() {
  Swal.fire({
    title: "💖 Message for my prettyyy princess 💖",
    html: `
      <p style="text-align: left;">
        Hi babiii kooo! Happy Girlfriends Dayyyy!!<br><br>
        Grabeeee, thank you kasi andiyan ka palagi for me, kahit na minsan
        ang daldal ko sa chat marami meng kwento pero you still choose to stay. 
        Thank you sa patience mo, sa pag-intindi kahit LDR tayo ngayon. Sana pag 
        pumaldo na akoo andyaan ka parinn babii, babawiin ko lahat ng monthsary 
        na hindi tayo nakapag celebratee. promiseee ko yaan sayo babii. Iloveyouuu 
        soooo muchhh babyyy kooo! 💕 Imissyouuu everydayyyyy! Hintayin mo lang, 
        soon magkakasama rin tayo. Promise!<br><br>
        Sorry babii eto lang muna kaya ko ibigay sayoo. For now, enjoy this message 
        at sana napangiti kita hehe<br><br>

        – Love, Your pogi (eme HAHAHAHA) / makulit / forever boyfriend mwaaa 💋
      </p>
    `,
    width: "600px", // Custom width
    padding: "1.5em",
    background: "#fff0f5",
    confirmButtonText: "Awww 🥺",
    confirmButtonColor: "#f7a1c4",
  });
}

function playSong() {
  const song = new Audio("./Resources/Taylor Swift - Mine.wav"); // Replace with your song path
  song.play();
}

function clickMore() {
  window.open("./flower.html", "_blank"); // Replace with your own link
}

let currentSlide = 0;
const carousel = document.getElementById("carousel");
const totalSlides = document.querySelectorAll(".carousel-image").length;

function updateCarousel() {
  const offset = -currentSlide * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

setInterval(() => {
  nextSlide();
}, 2000);

const heartContainer = document.getElementById("heart-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";

  // Random left position
  heart.style.left = Math.random() * 100 + "vw";
  // Random animation duration
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  // Random size
  heart.style.fontSize = 16 + Math.random() * 24 + "px";

  heartContainer.appendChild(heart);

  // Remove after animation ends
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Create hearts continuously
setInterval(createHeart, 300);
