let SongIndex = 0;
var audioelement = new Audio("songs/s1.mp3");

let masterplay = document.getElementById("masterplay");
let sound = document.getElementById("sound");
let song1p = Array.from(document.getElementsByClassName("song1"));
let songs = [
  {
    songname: "Die For You",
    path: "songs/s1.mp3",
    imgpath: "images/s1.jpeg",
  },
  { songname: "Topia Twins", path: "songs/s2.mp3", imgpath: "images/s2.jpg" },
  { songname: "iraaday", path: "songs/s3.mp3", imgpath: "images/s3.jpeg" },
  {
    songname: "Glimpse of Us",
    path: "songs/s4.mp3",
    imgpath: "images/s4.jpeg",
  },
  {
    songname: "Until I Found You",
    path: "songs/s5.mp3",
    imgpath: "images/s5.png",
  },
  { songname: "The Scientist", path: "songs/s6.mp3", imgpath: "images/s6.jpg" },
];

song1p.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].imgpath;
  element.getElementsByClassName("songname")[0].innerHTML = songs[i].songname;
});

masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-solid fa-play");
    masterplay.classList.add("fa-solid fa-pause");
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
  }
});

audioelement.addEventListener("timeupdate", () => {
  progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  sound.value = progress;
});

sound.addEventListener("change", () => {
  audioelement.currentTime = (sound.value * audioelement.duration) / 100;
});

const playall = () => {
  Array.from(document.getElementsByClassName("songitem")).forEach((element) => {
    element.classList.remove("fa-play");
    element.classList.add("fa-pause");
  });
};
Array.from(document.getElementsByClassName("songitem")).forEach((element) => {
  element.addEventListener("click", (e) => {
    index = parseInt(e.target.id);
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    audioelement.src = "songs/s1.mp3";
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
  });
});
