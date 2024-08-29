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

// Script Interpretasi Kinerja Slide-per-Slide Gambar
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

function submitForm() {
  // Mendapatkan nilai dari form
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const message = document.getElementById('message').value;

  // Memvalidasi input
  if (name === "" || dob === "" || gender === "" || message === "") {
      alert("Semua field harus diisi!");
      return;
  }

  // Mendapatkan waktu saat ini
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleString(); // Format waktu sesuai lokal

  // Menampilkan hasil input di halaman
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      <h2>Hasil Input:</h2>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${dob}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${message}</p>
      <p><strong>Waktu Pengisian:</strong> ${formattedTime}</p>
  `;

  // Mengosongkan form setelah submit
  document.getElementById('userForm').reset();
}
// AKHIR CODE SCRIPT JS