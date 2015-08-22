function flipToBack(event){
document.getElementById('frontface').style.transitionDelay="0s";
document.getElementById('backface').style.transitionDelay="1s";
document.getElementById('frontface').style.transform="rotateY(90deg)";
document.getElementById('backface').style.transform="rotateY(0deg)";
}// JavaScript Document


function flipToFront(event){
document.getElementById('frontface').style.transitionDelay="1s";
document.getElementById('backface').style.transitionDelay="0s";
document.getElementById('backface').style.transform="rotateY(-90deg)";
document.getElementById('frontface').style.transform="rotateY(0deg)";
}