var list = new List();
list.build();

function List() {
this.build = function() {
var toc = document.getElementById("toc");
var tocButton = "";
var innerHTML = "";
toc.innerHTML = "";
var max = 138;
songNum = 1; //global

for (var i = 1; i <= max; i++){
tocButton = "<li id='toc" + i + "'>" + i + "</li>";
innerHTML += tocButton;
}

toc.innerHTML = innerHTML;

var buttonList = document.getElementById('toc');
var buttons = buttonList.getElementsByTagName('li');

for (var i = 0; i < max; i++) {
var button = buttons[i];
button.onclick = clickButton(i); //call clickButton
} 

function clickButton(n) {
return function() {
songNum = n;
document.getElementById("toc").style.display = "none";
var song = new Song(songNum); 
song.build();
scrollTo(0,0);
}
}
}
}

function Song(songNumber) {
this.number = songNumber + 1;
this.title = songdata[songNumber].title;
this.verse1 = songdata[songNumber].verse[0];
this.verse2 = songdata[songNumber].verse[1];
this.verse3 = songdata[songNumber].verse[2];
this.chorus = songdata[songNumber].chorus;
this.scripture = songdata[songNumber].scripture;
this.footer = songdata[songNumber].footer;
//this.musicPiano = songmusic[songNumber].musicPiano;
this.musicPiano = songmusic[songNumber]; //in it's own array to share between translations
console.log(this.musicPiano);

this.build = function() {
var songContent = '<div id="song' + this.number + '" class="song">\n';
songContent += '<h1><span class="song-number">' + this.number + '</span> ' + this.title + '</h1>\n';
if (this.verse1) {
songContent += '<p class="verse">' + this.verse1 + '</p>\n';
}

if (this.chorus) {
songContent += '<p class="chorus">CHORUS:<br />' + this.chorus + '</p>\n';
}

if (this.verse2) {
songContent += '<p class="verse">' + this.verse2 + '</p>\n';
}
if (this.verse3) {
songContent += '<p class="verse">' + this.verse3 + '</p>\n';
}

songContent += '<p class="song-footer">Taken from: ' + this.scripture + ' ' + this.footer + '</p>';

if (this.musicPiano) {
songContent += '<audio class="audio-player" controls>\n';
songContent += '<source src="' + this.musicPiano + '" type="audio/mpeg">\n';
songContent += '</audio>\n';
}



songContent += '</div>';

document.getElementById("result").innerHTML += songContent;
}

}