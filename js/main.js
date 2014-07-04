var list = new List();
list.build();

//var song = new Song(125);
var song = new Song(125);
song.build();

function List() {

	this.build = function() {
		var toc = document.getElementById("toc");
		var tocButton = "";
		var innerHTML = "";
		toc.innerHTML = "";
		var max = 135;
		var songNumber = "";

		for(var i = 1; i <= max; i++){						
			tocButton = "<li id='toc" + i + "'>" + i + "</li>";				
			innerHTML += tocButton;	
			//button = 'toc' + i;
			
			//console.log(button);
			
		}		
		
		toc.innerHTML = innerHTML;		
		
		//click event
		var buttonList = document.getElementById('toc');
		var buttons = buttonList.getElementsByTagName('li');
		var buttonNumber = "";
		for (var i = 0; i < buttons.length; i++) {
			var button = buttons[i];			
			button.onclick = clickButton(i + 1); //call clickButton				  
		}		 
		
		function clickButton(n) {			
			return function(songNumber) {
				//console.log(n);	
				var songNumber = n;
				console.log(songNumber);
				document.getElementById("toc").style.display = "none";				
			}		
			
		}	
		
	}
	

}



function Song(songNumber) {	
	this.number = songNumber;
	this.title = songdata[songNumber].title;
	this.verse1 = songdata[songNumber].verse[0];
	this.verse2 = songdata[songNumber].verse[1];
	this.verse3 = songdata[songNumber].verse[2];
	this.chorus = songdata[songNumber].chorus;
	this.scripture = songdata[songNumber].scripture;
	this.footer = songdata[songNumber].footer;
	
	this.build = function() {
		var songContent = '<div id="song' + this.number + '" class="song">\n';
		songContent += '<h1><span class="song-number">' + this.number + '</span> ' + this.title + '</h1>\n';
		songContent += '<p class="verse">' + this.verse1 + '</p>\n';
		
		if (this.chorus) {
			songContent += '<p class="chorus">CHORUS:<br />' + this.chorus + '</p>\n';
		}

		if (this.verse1) {
			songContent += '<p class="verse">' + this.verse1 + '</p>\n';
		}
		if (this.verse2) {
			songContent += '<p class="verse">' + this.verse2 + '</p>\n';
		}
		if (this.verse3) {
			songContent += '<p class="verse">' + this.verse3 + '</p>\n';
		}					

		songContent += '<p class="song-footer">Taken from: ' + this.scripture + ' ' + this.footer + '</p>';
		songContent += '</div>';
		
		document.getElementById("result").innerHTML += songContent;
	}
		/*
		console.log(song.number); 
		console.log(song.title); 
		console.log(song.verse1);

		if (song.chorus !== undefined) { 
			console.log(song.chorus); 
		}
		if (song.verse2 !== undefined) {
			console.log(song.verse2); 
		}

		if (song.verse3 !== undefined) {
			console.log(song.verse3); 
		}
		
		console.log(song.scripture); 
		console.log(song.footer); 
		}
		*/
		
}

