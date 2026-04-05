let songs=[
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3",
    "song5.mp3",
    "song6.mp3",
    "song7.mp3",
    "song8.mp3",
    "song9.mp3",
    "song10.mp3",
    "song 11.mp3"
];
let index=0;
let audio=new Audio(songs[index]);
let hour=new Date().getHours();
let greeting="";
if(hour<12){
    greeting="Good Morning";
}
else if(hour<17){
    greeting="Good Afternoon";
}
else if(hour<21){
    greeting="Good Evening";
}
else{
    greeting="Good Night";
}
document.getElementById("greeting").innerText=greeting;
function playPause(){
    let playBtn=document.getElementById("playBtn");
    if(audio.paused){
        audio.play();
        playBtn.innerText="⏸️";
    }
    else{
        audio.pause();
        playBtn.innerText="▶️";
    }
}
function nextSong(){
    index++;
    if(index>=songs.length)
        index=0;
    audio.src=songs[index];
    audio.play();
document.getElementById("songName").innerText="Song" + (index+1);
document.getElementById("playBtn").innerText="⏸️";
}
function prevSong(){
    index--;
    if(index<0)index=songs.length-1;
    audio.src=songs[index];
    audio.play();
document.getElementById("songName").innerText="Song" + (index+1);
document.getElementById("playBtn").innerText="⏸️";
}
function playSong(i){
    index=i;
    audio.src=songs[index];
    audio.play();
document.getElementById("songName").innerText="Song" + (index+1);
document.getElementById("playBtn").innerText="⏸️";
}
