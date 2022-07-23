var y = window.matchMedia("(max-width: 550px)");
var x = window.matchMedia("(min-width: 550px) and (max-width: 1000px)");
myFunctionx(x);myFunctiony(y)// Call listener function at run time
x.addListener(myFunctionx);y.addListener(myFunctiony); // Attach listener function on state changes


function myFunctionx(x) {
	const hero = document.getElementById("hero");
	const nav = document.getElementById("nav");
	const heroImage = document.getElementById("hero-image");
	const heroLine = document.getElementById("hero-line");

if(x.matches){
		hero.className = "mxht";
		nav.className = "fr magb1";
		heroImage.className = "cb magl1 fl posr w5 z1";
		heroLine.className = "rot20 w2 colgy";
  	}
if(!x.matches){
		hero.className = "ht";
		nav.className = "fr";
		heroImage.className = "cb magl1 fl posr w3 z1";
		heroLine.className = "rot12 w2 colgy";
}
}

function myFunctiony(y) {


if(y.matches){
		  	}
}
