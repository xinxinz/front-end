// var myVideo=document.getElementById("video"); 
function showCoordinate (ev) {
	var x = ev.clientX;
	var y = ev.clientY;
	document.getElementById("show").innerHTML="("+ x +","+ y +")";

}
function clearCoordinate () {
	document.getElementById("show").innerHTML="";
}

var c=document.getElementById("c1");
var cxt=c.getContext("2d");
cxt.fillStyle="#FF0000";
cxt.fillRect(0,0,80,75);

var myVideo=document.getElementById("video");	
function playPause () {	
	if (myVideo.paused) {	
		myVideo.play();	
	}else{	
		myVideo.pause();	
	}	
}	
function bigSize () {	
	myVideo.width=480;

}
function middleSize () {	
	myVideo.width=360;

}
function smallSize () {	
	myVideo.width=240;	
}

function drag(ev){
	ev.dataTransfer.setData("img",ev.target.id);
}
function allowDrop(ev){
	ev.preventDefault();
}
function drop(ev){
	ev.preventDefault();
	var data = ev.dataTransfer.getData("img");
	ev.target.appendChild(document.getElementById(data));

}
