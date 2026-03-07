AOS.init();

const quotes = [
  `"By perseverance the snail reached the ark."`,
  `"A Bible that's falling apart usually belongs to someone who isn't."`,
  `"Faith goes up the stairs that love has built."`,
  `"Nobody ever outgrows Scripture."`,
  `"Visit many good books but live in the Bible."`,
];

function newQuote() {
  let random = Math.floor(Math.random() * quotes.length);

  document.getElementById("quoteText").innerText = quotes[random];
}

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const update = () => {
    const target = +counter.getAttribute("data-target");

    const count = +counter.innerText;

    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);

      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

// Timeline Read More Functionality
const buttons = document.querySelectorAll(".timeline-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const moreText = this.previousElementSibling;

    if (moreText.style.display === "block") {
      moreText.style.display = "none";
      this.innerText = "Read More";
    } else {
      moreText.style.display = "block";
      this.innerText = "Show Less";
    }
  });
});

const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach((img) => {
  img.addEventListener("click", function () {
    const src = this.getAttribute("src");
    const title = this.getAttribute("data-title");
    const description = this.getAttribute("data-description");

    document.getElementById("modalImage").src = src;
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
  });
});
