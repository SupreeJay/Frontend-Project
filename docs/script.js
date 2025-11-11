const bookmarkButton = document.getElementById("bookmark");
const lastPart = document.getElementById("button");

bookmarkButton.addEventListener("click", function(){
bookmarkButton.classList.toggle("bookmark_2")
});

lastPart.addEventListener("click", function(){
  lastPart.classList.toggle("button_2")
});
