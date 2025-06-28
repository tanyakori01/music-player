// List your songs here (these files should be present in the same directory)
const songs = [
  'song1.mp3',
  'song2.mp3',
  'song3.mp3'
];

let currentSong = 0;
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const currentSongText = document.getElementById('current-song');

function loadSong(index) {
  audio.src = songs[index];
  currentSongText.textContent = songs[index];
}

playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});

nextBtn.addEventListener('click', () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
});

prevBtn.addEventListener('click', () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
});

audio.addEventListener('ended', () => {
  nextBtn.click();
});

// Initial song load
loadSong(currentSong);