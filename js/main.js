
	
		function createList(){		  
		  var toc = document.getElementById("toc");
		  var tocButton = "";
		  var innerHTML = "";
		  toc.innerHTML = "";
		  var max = 135;		  
		  for(var i = 1; i <= max; i++){
			tocButton = "<li id='toc" + i + "'>" + i + "</li>";
			//console.log(i);
			
			innerHTML += tocButton;	
			
			//var tocButton = "toc-" + i;
			//var tocButton = "#toc-" + i;
			//console.log(tocButton);			
			
			
		  }
		  toc.innerHTML = innerHTML;
  
		  for(var j = 1; j <= max; j++) {
			//var tocText = $("#toc" + j).text();
			var button = document.getElementById("toc" + j);
			//var button = document.getElementById(tocButton.innerHTML);
			//console.log(j);
			
			button.addEventListener("click", function() {
				//console.log(this.innerHTML);
				//console.log(button);
				var buttonText = this.innerHTML;
				clicks(buttonText);			
			}, false);		
			
		  }		  
	  
		};
		
		function clicks(buttonText) {
			//console.log(buttonText);			
			//TODO: hide toc
			//$("#toc").hide();
			var toc = document.getElementById("toc");
			toc.style.display = "none";
			buildSong(buttonText);
		}		
		
		function buildSong(buttonText) {			
			var songContent, songNumber, songTitle, scripture, verse1, chorus, footer;			
			
			buttonText = buttonText - 1; // added for demo purposes, THIS NEEDS TO BE FIXED
			
			songNumber = songdata[buttonText].number;
			songTitle = songdata[buttonText].title;
			verse1 = songdata[buttonText].verse[0]; //only show first verse, then chorus, then other verses
			verseOthers = songdata[buttonText].verse.slice(1); //get all other verses
			chorus = songdata[buttonText].chorus;
			footer = songdata[buttonText].footer;
			
			songContent = '<div id="song' + songNumber + '" class="song">\n';
			songContent += '<h1><span class="song-number">' + songNumber + '</span> ' + songTitle + '</h1>\n';
			songContent += '<p class="verse">' + verse1 + '</p>\n';
			//chorus
			if (chorus) {
				songContent += '<p class="chorus">CHORUS:<br />' + chorus + '</p>\n';
			}
			if (verseOthers) {
				songContent += '<p class="verse">' + verseOthers + '</p>\n';
			}
			
			songContent += '<p class="song-footer">' + footer + '</p>';
			songContent += '</div>';
						
			document.getElementById("result").innerHTML += songContent;
		
			
			
			
		}
		
		createList();
		//clicks();
		//buildSong();