window.addEventListener("load", initEvents);
// var songNames;
var audioPlayer;

function initEvents() {
    // songNames = document.querySelectorAll("#featuredSongs a");
    var ul = document.querySelector("#songsList");
    audioPlayer = document.querySelector("#audio");
    // for (var i = 0; i < songNames.length; i++) {
    //     songNames[i].addEventListener("click", playSong);
    // }
    songsList.forEach(function(obj) {
        // console.log("Loading Songs");
        var li = document.createElement("li");
        var span_1 = document.createElement("span");
        var span_2 = document.createElement("span");
        var img = document.createElement("img");
        span_1.innerHTML = obj.song_id;
        span_2.innerHTML = obj.song_name;
        span_2.className = 'songName';
        img.setAttribute('src', obj.song_thumb);
        // img.className = 'w-100';
        li.appendChild(span_1);
        li.appendChild(img);
        li.appendChild(span_2);
        ul.appendChild(li);
        span_2.addEventListener("click", playSong);
    })
}

function playSong() {
    var song = event.srcElement.innerHTML;
    for (var i = 0; i < songsList.length; i++) {
        if (song == songsList[i].song_name) {
            songName = songsList[i].song_url;
        }
    }
    audioPlayer.src = songName;
    audioPlayer.play();
}