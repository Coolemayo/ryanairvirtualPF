// script.js
document.addEventListener('DOMContentLoaded', ()=> {
  const loginBtn = document.getElementById('login-btn');
  const modal    = document.getElementById('login-modal');
  const closeBtn = document.querySelector('.close');
  const doLogin  = document.getElementById('do-login');
  const flights  = document.getElementById('flights');

  // Modal öffnen
  loginBtn.addEventListener('click', e=>{
    e.preventDefault();
    modal.style.display = 'flex';
  });
  // Modal schließen
  closeBtn.addEventListener('click', ()=> modal.style.display = 'none');
  window.addEventListener('click', e=> {
    if(e.target === modal) modal.style.display = 'none';
  });

  // Login simulieren
  doLogin.addEventListener('click', ()=>{
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    if(user && pass) {
      modal.style.display = 'none';
      flights.classList.remove('hidden');
      flights.classList.add('fade-in');
      window.location.hash = '#flights';
    } else {
      alert('Bitte Benutzername und Passwort eingeben.');
    }
  });
});
