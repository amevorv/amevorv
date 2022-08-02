
var y = window.matchMedia("(max-width: 550px)");
var x = window.matchMedia("(min-width: 550px) and (max-width: 1000px)");
myFunctionx(x);myFunctiony(y)// Call listener function at run time
x.addListener(myFunctionx);y.addListener(myFunctiony); // Attach listener function on state changes


function myFunctionx(x) {
	const hero = document.getElementById("hero");
	const nav = document.getElementById("nav");
	const heroImage = document.getElementById("hero-image");
	const heroLine = document.getElementById("hero-line");
	const leftStack = document.getElementById("leftstack");
	const rightStack = document.getElementById("rightstack");

if(x.matches){
		hero.className = "mxht";
		nav.className = "fr magb1";
		heroImage.className = "cb magl1 fl posr w5 z1";
		heroLine.className = "rot20 w2 colgy";
		leftStack.className = "w10";
		rightStack.className = "w10";
  	}
if(!x.matches){
		hero.className = "ht";
		nav.className = "fr";
		heroImage.className = "cb magl1 fl posr w3 z1";
		heroLine.className = "rot12 w2 colgy";
}
}

function myFunctiony(y) {
	const herox = document.getElementById("hero");
	const leftStack = document.getElementById("leftstack");
	const rightStack = document.getElementById("rightstack");
	const heroDesign = document.getElementById("hero-design");
	const rightHero = document.getElementById("right-hero");
	const heroBut = document.getElementById("hero-but");
	const menu = document.getElementById("menu");
	const menuIcon = document.getElementById("menu-icon");

if(y.matches){
		herox.className = "mxht";
		leftStack.className = "w9";
		rightStack.className = "w9";
		heroDesign.className = "dn";
		rightHero.className = "posr w8 cb fr padr1 h3 z3";
		rightHero.style.transform ="translate(0, -20px)"
		menu.className = "dn"
		menuIcon.className = "dib posr"
		heroBut.className="but bcolb colw fr magt2 padl2 padr2 lh fs4 magb2"
		  	}

if(!y.matches){
		leftStack.className = "w4";
		rightStack.className = "w4";
		heroDesign.className = "posr fl tu w8 z2";
		rightHero.className = "posr w3 fr h3 z3";
		menu.className = "fs4"
		menuIcon.className = "dn"
		heroBut.className = "but bcolb colw fr magt2 padl2 padr2 lh fs6"
		  	}
}
