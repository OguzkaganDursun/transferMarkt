// Slide Index
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show Slides Function
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Limit Slide Index
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide Slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove Active State Of Points
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show Specific Slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto Slide Change
var slideInterval = setInterval(function () {
    plusSlides(1);
}, 4000);

// Pop Up Settings
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        showPopup('leftPopup');
        showPopup('rightPopup');
    }, 3000);

    function showPopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'block';
            
            const closeButton = popup.querySelector('.closeButton');
            if (closeButton) {
                // Close All Pop-Ups When Clicking The Close Button
                closeButton.addEventListener('click', function () {
                    closeAllPopups();
                });
            }

            // Open Center Pop Up When Button Clicked Inside
            const innerButton = popup.querySelector('.innerButton');
            if (innerButton) {
                innerButton.addEventListener('click', function () {
                    openCentralPopup();
                });
            }
        }
    }
});

function closeAllPopups() {
    closePopup('leftPopup');
    closePopup('rightPopup');
    closePopup('centralPopup');
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}

function openCentralPopup() {
    const centralPopup = document.getElementById('centralPopup');
    if (centralPopup) {
        centralPopup.style.display = 'block';
    }
}

// Star Settings

document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.star');
    const congratulationsMessage = document.getElementById('congratulations');

    stars.forEach(function(star) {
      star.addEventListener('mouseover', function() {
        highlightStars(this.dataset.rating);
      });

      star.addEventListener('mouseout', function() {
        resetStars();
      });
      star.addEventListener('click', function() {
        thankYouMessage (this.dataset.rating);
      });
    });

    function highlightStars(rating) {
      stars.forEach(function(star) {
        if (star.dataset.rating <= rating) {
          star.classList.add('rated');
        }
      });
    }

    function resetStars() {
      stars.forEach(function(star) {
        star.classList.remove('rated');
      });
    }

    function thankYouMessage(rating)
     {
        const thankYouMessage = document.getElementById('thankYouMessage');
        if (thankYouMessage) {
            thankYouMessage.style.display = 'block';
        }
    }

  });