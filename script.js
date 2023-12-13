const songs = [
  "uiratsupu-quan-shan-tamakiniku-qing-woru-reruratsupu.mp3",
  "zhen-shigureuitotemotsuyoigao-zhi-pv.mp3",
  "adrenaline-trysail-covered-by-shigureui-da-kong-subaru.mp3",
  "qun-qing-yoasobi-covered-by-shigureui.mp3",
  "debiruziyanaimon-covered-by-shigureui-jiao-juan-watame.mp3",
  "1000nian-sheng-kiteru-covered-by-shigureui.mp3",
  "daishikiyudaishiyuki-covered-by-shigureui-tian-gong-kokoro.mp3",
  "orizinarule-qu-su-sheng-rorishen-rekuiemu-shigureui-9sai.mp3",
  "shiyanimasu-sos-covered-by-shigureui.mp3",
];
const player = document.getElementById("player");

const createSongList = () => {
  const list = document.createElement("ol");
  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i].slice(0,-4)));
    list.appendChild(item);
  }
  return list;
}

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

const links = document.querySelectorAll("li");
for (const link of links) {
  link.addEventListener("click", setSong);
}

function setSong(e) {
  document.querySelector("#headphones").classList.remove("pulse");

  const source = document.getElementById("source");
  source.src = "songs/" + e.target.innerText + ".mp3";
  document.getElementById(
    "currentSong"
  ).innerText = `Now Playing:  ${e.target.innerText}`;

  player.load();
  player.play();

  document.querySelector("#headphones").classList.add("pulse");
}

function playAudio() {
  if (player.readyState) {
    player.play();
  }
}

function pauseAudio() {
  player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
  const volume = e.target.value;
  player.volume = volume;
}

const progressBar = document.getElementById("progress");

function updateProgress() {
  if (player.currentTime > 0) {
    progressBar.value = (player.currentTime / player.duration) * 100;
  }
}

progressBar.addEventListener("click", (e) => {
  const clickedTime = (e.offsetX  / progressBar.clientWidth) * player.duration;
  player.currentTime = clickedTime;
});

let isDragging = false;

progressBar.addEventListener("mousedown", () => {
  isDragging = true;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if(isDragging) {
    const clickedTime = (e.offsetX / progressBar.clientWidth) * player.duration;
    player.currentTime = clickedTime;
  }
});