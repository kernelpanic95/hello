var element_exit = document.querySelector(".effect .object");
var text = element_exit.getAttribute("quotes").split(",");
var quote = 0;
var counter = 0;
var characters = text[0].split('');

var control = function(){
	
	if (quote < text.length) {
		var characters = text[quote].split('');
		if (counter < characters.length){
			type(characters);
		}
		if (counter == characters.length){        				
			setTimeout(function(){
				delete_text();
			},3000);
		}
	}
	if (quote == text.length) {
		quote = 0;
		var characters = text[quote].split('');
		type(characters);
		window.setTimeout(function(){
   			window.location.href = "./video.html";
		}, 1); 
	}     
	  		
};

var type = function(listcharacters){
	setTimeout(function(){
		var typed = element_exit.textContent += listcharacters[counter];
		element_exit.innerHTML = typed;
		counter++;
		control();
	}, 80);
};

var delete_text = function(){
	if (counter > 0 ){
		setTimeout(function(){
			var typed = element_exit.textContent.slice(0, -1);
			element_exit.innerHTML = typed;
			counter--;
    		delete_text();
    	}, 10);
	}
	if(counter == 0){
		quote++; 
		setTimeout(function(){
			control();
		},1000);
	}
};

type(characters);
