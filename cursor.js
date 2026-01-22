const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

document.querySelectorAll("a, button, .card, li").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
});
