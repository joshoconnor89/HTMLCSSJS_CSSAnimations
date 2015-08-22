// JavaScript Document
// This script selects all HTML buttons inside HTML sections and attaches a script to them
window.onload = initAll;

function initAll() {
	var allSections = document.getElementsByTagName("section");
	var itemCount = allSections.length;
	for (var i=0; i<=itemCount; i++) {
		  document.getElementsByTagName("section")[i].getElementsByTagName("button")[0].onclick = showItem;
			}
	}
	
function showItem() {
		alert('The script works');
}