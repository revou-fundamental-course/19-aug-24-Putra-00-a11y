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


// // AWAL CODE SCRIPT JS
// console.log('HELLO PUTRA!');

// // Script Interpretasi Welcoming..
// const person = prompt("Masukkan Nama Kamu..");
// document.getElementById("h2TextWL").innerHTML = "Hello, " + person;

// // Script Mode Pergantin Lampu / Brightness
// const toggleButton = document.getElementById('buttonToggleMode');
// const themeStyle = document.getElementById('');

// // Script Code JS Efek Perubahan Pencahayaan Portfolio Menggunakan Function Toggle
// toggleButton.addEventListener('click', () => {
//     if (document.body.classList.contains('minimMode')) {
//         document.body.classList.remove('minimMode');
//     } else {
//         document.body.classList.add('minimMode');
//     }
// });

// function buttonSubmit0() {
//   // Mendapatkan nilai dari form
//   const name = document.getElementById("username").value;
//   const live = document.getElementById("userDate").value;
//   const gender = document.getElementById("input[name=gender]:checked").value;
//   const message = document.getElementById("userMassage").value;

//   // Memvalidasi input
//   if (name === "" || live === "" || gender === "" || message === "") {
//       alert("Masukkan Input!");
//       return;
//   }

//   // Mendapatkan waktu saat ini
//   const currentTime = new Date();
//   const formattedTime = currentTime.toLocaleString(); // Format waktu sesuai lokal

//   // Menampilkan hasil input di halaman
//   const result = document.getElementById("divWrapResult");
//   result.innerHTML = `
//     <p>Time : ${currentTime} </p>
//     <h3>MY COMMENT :</h3>
//     <p>Name : ${name} </p>
//     <p>Date/Place : ${live} </p>
//     <p>Gender : ${gender} </p>
//     <p>Massage : ${message} </p>
//     <h5>ThAnK YoU!</h5>
//   `;

//   // Mengosongkan form setelah submit
//   document.getElementById("divWrapForm").reset();
// }

// // Script Slide-per-Slide Untuk Gambar Di Portfolio
// let indexSlide = 1;
// showBanner(1);

// function nextSlide(n) {
//   showBanner((indexSlide += n));
// }

// // Script Interpretasi Kinerja Slide-per-Slide Gambar
// function showBanner(indexBanner) {
//   let listImage = document.getElementsByClassName("banner-img");
//   if (indexBanner > listImage.length) indexSlide = 1;

//   let index = 0;
//   while (index < listImage.length) {
//     listImage[index].style.display = "none";
//     index++;
//   }

//   listImage[indexSlide - 1].style.display = "block";
//   console.log(listImage);
// }
// AKHIR CODE SCRIPT JS

// https://revou-fundamental-course.github.io/19-aug-24-Putra-00-a11y/