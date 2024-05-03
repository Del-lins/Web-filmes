let playButton = document.querySelector('.play-trailer');
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#video');
let closeBtn = document.querySelector('.close-video');

playButton.onclick = () => {
  video.classList.add('play-trailer');

  myvideo.play();
}

closeBtn.onclick = () => {
  video.classList.remove('play-trailer')

  myvideo.pause();
}