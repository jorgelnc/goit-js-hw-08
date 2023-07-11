import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerVimeo = document.querySelector("#vimeo-player");
const localKey = "videoplayer-current-time";
const player = new Player(playerVimeo);
 
function play(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

player.setCurrentTime(localStorage.getItem(localKey))
    .then(function (time) {
        // time = the actual time that the player seeked to
        time = localStorage.getItem(localKey)
    });

player.on("timeupdate", throttle(play, 1000));