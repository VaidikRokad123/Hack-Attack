let currentPhotoIndex = 0;
let photos = ["image1.webp", "image2.webp", "image3.webp"];
let texts = [
  "<h2 style='margin-bottom: 0;'>Agronomy + AI =</h2><h2 style='margin-top: 0;'>Precision Agriculture</h2><h6 style='margin-top: 10px; color: #dbd8d8;'>Powerful combination of agronomy expertise with Artificial Intelligence enables any farmer to adopt and succeed with precision agriculture practices</h6>",
  "<h2 style='margin-bottom: 0;'>Crop Planning and Production</h2><h2 style='margin-top: 0;'>With you at every stage</h2><h6 style='margin-top: 10px; color: #dbd8d8;'>From soil test through crop selection to production and help you achieve the target yield</h6>",
  "<h2 style='margin-bottom: 0;'>Pest and Disease Control</h2><h2 style='margin-top: 0;'>Early Detection</h2><h6 style='margin-top: 10px; color: #dbd8d8;'>Our pest, disease and plant nutrition deficiency detection technology enables early detect of problems with crop and provides remedy</h6>"
];

function prevPhoto() {
  currentPhotoIndex = (currentPhotoIndex - 1 + 3) % 3;
  document.getElementById("current-photo").src = photos[currentPhotoIndex];
  document.getElementById("text").innerHTML = texts[currentPhotoIndex];
}

function nextPhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % 3;
  document.getElementById("current-photo").src = photos[currentPhotoIndex];
  document.getElementById("text").innerHTML = texts[currentPhotoIndex];
}




// footeer

// JavaScript
// Add event listener to social media links
