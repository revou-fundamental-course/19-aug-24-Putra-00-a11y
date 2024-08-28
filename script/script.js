// AWAL CODE SCRIPT JS
console.log('HELLO PUTRA!');


// Script Mode Pergantin Lampu / Brightness
const toggleButton = document.getElementById('buttonToggleMode');
const themeStyle = document.getElementById('');

// Script Code JS Efek Perubahan Pencahayaan Portfolio Menggunakan Function Toggle
toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('minimMode')) {
        document.body.classList.remove('minimMode');
    } else {
        document.body.classList.add('minimMode');
    }
});

// Script Slide-per-Slide Untuk Gambar Di Portfolio
let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
  showBanner((indexSlide += n));
}

function showBanner(indexBanner) {
  let listImage = document.getElementsByClassName("banner-img");
  if (indexBanner > listImage.length) indexSlide = 1;

  let index = 0;
  while (index < listImage.length) {
    listImage[index].style.display = "none";
    index++;
  }

  listImage[indexSlide - 1].style.display = "block";
  console.log(listImage);
}
// AKHIR CODE SCRIPT JS