(function(){ //anonym function
	var farveskifter = document.getElementById("farveskifter"); //kalder elementet farveskifter
	farveskifter.addEventListener("click", skiftfarve); //click funktion
	
	var spilIgen = document.getElementById("spilIgen");
	spilIgen.addEventListener("click", reloadquiz);
	
})();

function skiftfarve(){ //skiftfarve bliver kaldet fra linje 3 
	document.getElementById("container"); //elementet container bliver valgt
	container.style.backgroundColor = "red"; //background color ændres til rød	
}


function reloadquiz(){
	location.reload(); //*sitet reloader//*
}