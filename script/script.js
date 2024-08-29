// AWAL CODE SCRIPT..
console.log('HELLO PUTRA!');

// Script Interpretasi Welcoming..
const person = prompt("Masukkan Nama Kamu..");
document.getElementById("h2TextWL").innerHTML = "Hello, " + person;

// Script Mode Pergantian Lampu / Brightness
const toggleButton = document.getElementById('buttonToggleMode');

// Script Code JS Efek Perubahan Pencahayaan Portfolio Menggunakan Function Toggle
toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('minimMode')) {
        document.body.classList.remove('minimMode');
    } else {
        document.body.classList.add('minimMode');
    }
});

function buttonSubmit0() {
  // Mendapatkan nilai dari form
  const name = document.getElementById("username").value;
  const live = document.getElementById("userDate").value;
  const gender = document.querySelector("input[name='gender']:checked");
  const message = document.getElementById("userMassage").value;

  // Memvalidasi input
  if (!name || !live || !gender || !message) {
      alert("Masukkan Input!");
      return;
  }

  // Mendapatkan waktu saat ini
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleString(); // Format waktu sesuai lokal

  // Menampilkan hasil input di halaman
  document.getElementById("resultDateLive").textContent = "Time : " + formattedTime;
  document.getElementById("resultName").textContent = "Name : " + name;
  document.getElementById("resultDatePlace").textContent = "Date/Place : " + live;
  document.getElementById("resultGender").textContent = "Gender : " + gender.value;
  document.getElementById("resultMassage").textContent = "Massage : " + message;

  // Mengosongkan form setelah submit
  document.querySelector('form').reset();
}

// Script Slide-per-Slide Untuk Gambar Di Portfolio
let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementsByClassName("banner-img");
            // Menyembunyikan semua slide
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }    
            slides[slideIndex - 1].style.display = "block";  
            setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
        }

        function plusSlides(n) {
            slideIndex += n;
            let slides = document.getElementsByClassName("banner-img");
            if (slideIndex > slides.length) { slideIndex = 1; }
            if (slideIndex < 1) { slideIndex = slides.length; }
            showSlides();
        }
// AKHIR CODE SCRIPT JS

// https://revou-fundamental-course.github.io/19-aug-24-Putra-00-a11y/