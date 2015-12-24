var list = new List();
list.build();

function List() {
	this.build = function() {
		var toc = document.getElementById("toc");
		var tocButton = "";
		var innerHTML = "";
		toc.innerHTML = "";
		var max = 142;
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

	this.swipe = function(swipeDirection) {
		var hammerType = "swipe";
		document.getElementById("toc").style.display = "none";
		//var songLayout = document.querySelector(".song").style.display = "none";
		//document.querySelector("#result").style.display = "none";

		var result = document.querySelector("#result");
		var wrap = document.querySelector(".wrap");
		var songClass = document.querySelector(".song");

		var songID = document.querySelector("#song" + songNum);

		//result.parentNode.removeChild(result);

		if (swipeDirection == hammerType + "right") {
			var song = new Song(songNum--);
		} else if (swipeDirection == hammerType + "left") {
			var song = new Song(songNum++);
		}

		//document.parentNode.removeChild(document.querySelector('.song')); //clear DOM so song can be built again
		//document.removeChild(document.querySelector('#result')); //clear DOM so song can be built again

		//document.parentNode.replaceChild(songNum, songClass);		
		console.log(songID);
		console.log('songNum: ' + songNum);
		console.log(document.querySelector('.song'));
		song.build();
		//document.querySelector("#result").style.display = "block";
		scrollTo(0,0);
	}
}

function Song(songNumber) {
	this.number = songNumber + 1;
	this.title = songdata[songNumber].title;
	this.verse1 = songdata[songNumber].verse[0];
	this.verse2 = songdata[songNumber].verse[1];
	this.verse3 = songdata[songNumber].verse[2];
	this.chorus = songdata[songNumber].chorus;
	this.chorus2 = songdata[songNumber].chorus2;
	this.scripture = songdata[songNumber].scripture;
	this.footer = songdata[songNumber].footer;

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

		if (this.chorus2) {
			songContent += '<p class="chorus">CHORUS:<br />' + this.chorus2 + '</p>\n';
		}

		if (this.verse3) {
			songContent += '<p class="verse">' + this.verse3 + '</p>\n';
		}

		songContent += '<p class="song-footer">Taken from: ' + this.scripture + ' ' + this.footer + '</p>';

		songContent += '</div>';

		document.getElementById("result").innerHTML += songContent;
	}

}

var hammerEl = document.getElementById('body');
var hammertime = new Hammer(hammerEl);
hammertime.on('swiperight swipeleft', function(ev) {
    //console.log('swiperight');
	list.swipe(ev.type);
});
