const forYouLink = document.getElementById("for-you-link");
const followingLink = document.getElementById("following-link");

// Add event listeners
forYouLink.addEventListener("click", function() {
  forYouLink.classList.add("fw-bold");
  followingLink.classList.remove("fw-bold");
});

followingLink.addEventListener("click", function() {
  followingLink.classList.add("fw-bold");
  forYouLink.classList.remove("fw-bold");  
});
  
followingLink.addEventListener("click", function() {
  followingLink.classList.add("fw-bold");
  forYouLink.classList.remove("fw-bold");  
});  
