let switchStatus=true;
function switchGif(){
	var endGif = document.getElementById("offPanel");
	var endText = document.getElementById("turnoff");
	if(switchStatus){
		endGif.src="./Images/panel8.gif";
		endText.style.opacity=0;
		switchStatus=false;
	}


}