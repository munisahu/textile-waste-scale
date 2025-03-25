const stickyText = document.getElementById("stickyText");
const fixedText = document.getElementById("fixedText");
const originalTop = stickyText.offsetTop; // Get the original position

window.addEventListener("scroll", function () {
  const stickyRect = stickyText.getBoundingClientRect();
  const fixedRect = fixedText.getBoundingClientRect();

  // If the first text reaches the second text, it stops moving
  if (stickyRect.bottom >= fixedRect.top) {
    stickyText.style.position = "absolute";
    stickyText.style.top = fixedText.offsetTop + "px";
  } 
  // If scrolling back up, return to original position but never go past it
  else if (window.scrollY < originalTop) {
    stickyText.style.position = "absolute";
    stickyText.style.top = originalTop + "px";
  } 
  // Otherwise, keep it fixed at the top
  else {
    stickyText.style.position = "fixed";
    stickyText.style.top = "0";
  }
});