function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  navbar.style.display = "block"; 
  window.location.href = "#quotes"; 

  // munculin musik
  var musicBox = document.getElementById("kotak-musik");
  musicBox.style.display = "block"; 

}
  
function putarLagu() {
  var audio = document.getElementById("lagu");
  var kontrol = document.getElementById("kontrol");

  if (audio.paused) {
      audio.play();
      kontrol.src = "assets/img/musicon.png"; 
  } else {
      audio.pause();
      kontrol.src = "assets/img/musicoff.png";
  }
}
/*buat salin no rek*/ 
function copyAccountNumber() {
  const accountNumber = document.getElementById('account-number').innerText;
  navigator.clipboard.writeText(accountNumber).then(() => {
      alert("Nomor rekening disalin: " + accountNumber);
  }).catch(err => {
      console.error('Gagal menyalin: ', err);
  });
}
/*buat hasil pesan */
function submitMessage(event) {
  event.preventDefault(); 

  const name = document.getElementById('guest-name').value;
  const message = document.getElementById('message').value;

  const li = document.createElement('li');
  li.textContent = `${name}: ${message}`;

  document.getElementById('messages').appendChild(li);

  document.getElementById('message-form').reset();
}
/*buat animasi */
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  });

  const animatedElements = document.querySelectorAll('.animate-left, .animate-right, .animate-fade');
  animatedElements.forEach(element => {
      observer.observe(element);
  });
});