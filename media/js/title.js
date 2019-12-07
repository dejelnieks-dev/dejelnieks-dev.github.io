if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"D|",
					"E |",
					"J E|",
					"L N |",
					"I E K|",
					"S D E |",
					"J E L N|",
					"I E K S |",
					"D E J E L|",
					"N I E K S |",
					"D E J E L N|",
					"I E K S D E J |",
					"E L N I E K S|",
					"D E J E L N I E K S |",
					"D E J E L N I E K S|",
					"D E J E L N I E K S |",
					"D E J E L N I E K S|",
					"D E J E L N I E K |",
					"D E J E L N I E |",
					"D E J E L N I |",
					"D E J E L N |",
					"D E J E L |",
					"D E J E |",
					"D E J |",
					"D E |",
					"D |"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}