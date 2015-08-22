// JavaScript Document
//popup with fade, sizechange, movement

//Move button on to screen from left hand side
function moveIt() {
	//Whatever element has id mover in the document, the style property, left, set it to 0px
	document.getElementById('mover').style.left="400px";
}

//Move button back off the screen
function moveBack() {
	//Whatever element has id mover in the document, the style property, left, set it back to -400px
	document.getElementById('mover').style.left="-400px";
}

//Expand Content when ExpandIt button is clicked
function expandIt() {
	//Whatever element has id expander in the document, the style property, height, set it to 200px
	document.getElementById('expander').style.height="200px";
}

//Squish Content
function squishIt() {
	//Whatever element has id expander the document, the style property, height, set it to 40px (original setting)
	document.getElementById('expander').style.height="40px";
}

//FadeIn Content
function fadeIn() {
	//Change the width, height, and opacity style elements
	document.getElementById('modalbg').style.width="100%";
	document.getElementById('modalbg').style.height="100%";
	document.getElementById('modalbg').style.opacity="1";
}

//FadeOut Content
function fadeOut() {
	//Whatever element has id expander the document, the style property, height, set it to 40px (original setting)
	document.getElementById('modalbg').style.opacity="0";
	resetTime="2000";
	//counts 2000 milliseconds and then runs this.  When opacity fades out completely (after 2000 ms) this will run
	setTimeout("document.getElementById('modalbg').style.width='0'",resetTime);
	setTimeout("document.getElementById('modalbg').style.height='0'",2000);
}
