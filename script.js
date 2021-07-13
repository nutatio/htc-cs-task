const filmBtn = document.getElementById('film-tab-btn');
const channelBtn = document.getElementById('channel-tab-btn');
const authBtn = document.getElementById('auth-btn');
const popupBtn = document.getElementById('popup-btn');
const films = document.getElementById('films-content');
const channels = document.getElementById('channels-content');
const popup = document.getElementById('popup-container');
const popupLogin = document.getElementById('login');
const auth = document.getElementById('auth');
const authExitBtn = document.getElementById('auth-btn-exit');

const active = 'active';

console.log(authExitBtn);

filmBtn.addEventListener('click', () =>{
  if(filmBtn.classList.contains(active) === false){
    filmBtn.classList.toggle(active);
    if(channelBtn.classList.contains(active))
      channelBtn.classList.toggle(active);
      channels.style.display='none';
  }
  films.style.display='flex';
})

channelBtn.addEventListener('click', () =>{
  if(channelBtn.classList.contains(active) === false){
    channelBtn.classList.toggle(active);
    if(filmBtn.classList.contains(active))
      filmBtn.classList.toggle(active);
      films.style.display='none';
  }
  channels.style.display='flex';
}) 

authBtn.addEventListener('click', () =>{
  popup.style.display = 'flex';
})

popupBtn.addEventListener('click', () =>{
  popup.style.display = 'none';
  authBtn.setAttribute('hidden','enabled');
  authExitBtn.removeAttribute('hidden');
  let name = popupLogin.value;
  auth.innerHTML = `
    <span>${name}</span>
  `;

})

authExitBtn.addEventListener('click', () =>{
  authExitBtn.setAttribute('hidden','enabled');
  authBtn.removeAttribute('hidden');
  auth.innerHTML = ``;
})
