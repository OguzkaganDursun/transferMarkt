// Slayt indeksi
var slideIndex = 1;
showSlides(slideIndex);

// Slaytı ileri veya geri alma fonksiyonu
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Belirli bir slayta gitme fonksiyonu
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Slaytları gösterme fonksiyonu
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Slayt indeksini sınırla
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    // Slaytları gizle
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Noktaların aktif durumunu kaldır
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Belirli slaytı göster
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Otomatik Slayt Değişimi
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
            // Kapatma butonunu seç
            const closeButton = popup.querySelector('.closeButton');
            if (closeButton) {
                // Kapatma butonuna tıklandığında tüm pop-up'ları kapat
                closeButton.addEventListener('click', function () {
                    closeAllPopups();
                });
            }

            // İçindeki butona tıklandığında orta pop-up'ı aç
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

function rate(stars) {
    const thankYouMessage = document.getElementById('thankYouMessage');
    if (thankYouMessage) {
        thankYouMessage.style.display = 'block';
    }
}