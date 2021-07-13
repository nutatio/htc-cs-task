const filmBtn = document.getElementById('film-tab-btn');
const channelBtn = document.getElementById('channel-tab-btn');
const authBtn = document.getElementById('auth-btn');
const popupBtn = document.getElementById('popup-btn');
const films = document.getElementById('films-content');
const channels = document.getElementById('channels-content')

const active = 'active';
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