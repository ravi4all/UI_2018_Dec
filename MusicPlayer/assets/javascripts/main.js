window.addEventListener("load", initEvents);
// var songNames;
var audioPlayer;
var slider;

function initEvents() {
    // songNames = document.querySelectorAll("#featuredSongs a");
    var ul = document.querySelector("#songsList");
    audioPlayer = document.querySelector("#audio");
    document.querySelector("#playSong").addEventListener("click", startSong);
    document.querySelector("#pauseSong").addEventListener("click", pauseSong);
    document.querySelector("#stopSong").addEventListener("click", stopSong);
    slider = document.querySelector("#slider");
    document.querySelector("#save").addEventListener("click", saveToPlayList);
    // for (var i = 0; i < songNames.length; i++) {
    //     songNames[i].addEventListener("click", playSong);
    // }
    songsList.forEach(function(obj) {
        // console.log("Loading Songs");
        var li = document.createElement("li");
        var span_1 = document.createElement("span");
        var span_2 = document.createElement("span");
        var img = document.createElement("img");
        var btn = document.createElement("button");
        btn.innerHTML = "+";
        btn.addEventListener("click", addToPlaylist);
        btn.className = 'playListbtn btn btn-primary';
        span_1.innerHTML = obj.song_id;
        span_2.innerHTML = obj.song_name;
        span_2.className = 'songName';
        img.setAttribute('src', obj.song_thumb);
        // img.className = 'w-100';
        li.appendChild(span_1);
        li.appendChild(img);
        li.appendChild(span_2);
        li.appendChild(btn);
        ul.appendChild(li);
        span_2.addEventListener("click", playSong);
    })
    loadFromPlayList();
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
    setTimeout(function() {
        slider.max = audio.duration;
        document.querySelector("#timeLeft").innerHTML = Math.round(slider.max);
    }, 1000);
    setInterval(function() {
        // console.log(audio.currentTime);
        slider.value = audio.currentTime;
    }, 1000);
}

function startSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function stopSong() {
    audio.currentTime = 0;
}

function addToPlaylist() {
    // console.log(event.srcElement.parentElement.children[2].innerHTML);
    var songName = event.srcElement.parentElement.children[2].innerHTML;
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_name == songName) {
            // console.log(songsList[i]);
            obj.addSong(songsList[i].song_id, songsList[i].song_name, songsList[i].song_url, songsList[i].song_thumb);
        }
    }
    // obj.addSong();
    printPlayList();
}

function printPlayList() {
    var ul = document.querySelector("#playList");
    ul.innerHTML = "";
    obj.playList.forEach(function(obj) {
        // console.log("Loading Songs");
        var li = document.createElement("li");
        var span_1 = document.createElement("span");
        var span_2 = document.createElement("span");
        var img = document.createElement("img");
        var btn = document.createElement("button");
        btn.innerHTML = "-";
        btn.addEventListener("click", deleteFromPlayList);
        btn.className = 'playListbtn btn btn-primary';
        span_1.innerHTML = obj.id;
        span_2.innerHTML = obj.name;
        span_2.className = 'songName';
        img.setAttribute('src', obj.image);
        // img.className = 'w-100';
        li.appendChild(span_1);
        li.appendChild(img);
        li.appendChild(span_2);
        li.appendChild(btn);
        ul.appendChild(li);
        span_2.addEventListener("click", playSong);
    })
}

function deleteFromPlayList() {
    var songName = event.srcElement.parentElement.children[2].innerHTML;
    // console.log(songName);
    for (var i = 0; i < obj.playList.length; i++) {
        if (obj.playList[i].name == songName) {
            // console.log(obj.playList[i]);
            obj.deleteSong(obj.playList[i].id);
        }
    }
    printPlayList();
}

function saveToPlayList() {
    if (window.localStorage) {
        var json = JSON.stringify(obj.playList);
        // console.log(json);
        localStorage.setItem('myPlayList', json);
    }
}

function loadFromPlayList() {
    if (window.localStorage) {
        obj.playList = JSON.parse(localStorage.getItem('myPlayList'));
    }
    printPlayList();
}