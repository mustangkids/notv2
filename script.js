window.onload = function() {
    const images = [];
    for (let i = 1; i <= 19; i++) {
      images.push(`images/${i}.png`);
    }
  
    const imageContainer = document.getElementById("random-image");
    const refreshButton = document.getElementById("refresh-button");
  
    function showRandomImage() {
      const randomIndex = Math.floor(Math.random() * images.length);
      imageContainer.src = images[randomIndex];
      localStorage.setItem(`lastImage_${window.location.href}`, images[randomIndex]);
    }
  
    refreshButton.addEventListener("click", showRandomImage);
  
    const lastImage = localStorage.getItem(`lastImage_${window.location.href}`);
    if (lastImage) {
      imageContainer.src = lastImage;
    } else {
      showRandomImage();
    }
  };
