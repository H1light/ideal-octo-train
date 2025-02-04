document.addEventListener("scroll", function () {
  const header = document.querySelector(".md-header");
  if (window.scrollY > 50) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});
