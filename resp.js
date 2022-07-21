var y = window.matchMedia("(max-width: 450px)");
var x = window.matchMedia("(min-width: 450px) and (max-width: 821px)");
myFunctionx(x);myFunctiony(y)// Call listener function at run time
x.addListener(myFunctionx);y.addListener(myFunctiony); // Attach listener function on state changes


function myFunctionx(x) {
const nav = document.getElementById("nav");
const blackbox = document.getElementById('blackbox');
const rends = document.getElementById('rends');
const htmlr = document.getElementById('htmlrend');
const cssr = document.getElementById('cssrend');
const flexCont = document.getElementById('flex-cont')
const flexC1 = document.getElementById('flex-cont1')

if(x.matches){
		flexCont.className = "h8 w10 fjsa fw";
		flexC1.className = "w6  h3"
	    blackbox.className = "bcolb colw w10";
  		rends.className = "w10 h6 fjsa magt1";
  		htmlr.className = "w4";
  		cssr.className = "w4";
  	}
if(!x.matches){
		flexCont.className = "h6 w10 fjsa fw"
		flexC1.className = "w3 h6"
	    blackbox.className = "bcolb magl1 colw w10";
  		rends.className = "w3";
  		htmlr.className = "w7";
  		cssr.className = "w7";
}
}

function myFunctiony(y) {
const nav = document.getElementById("nav");
const blackbox = document.getElementById('blackbox');
const rends = document.getElementById('rends');
const htmlr = document.getElementById('htmlrend');
const cssr = document.getElementById('cssrend');
const flexCont = document.getElementById('flex-cont')
const flexC1 = document.getElementById('flex-cont1')
const tuts = document.getElementById('tutorials')
const title = document.getElementById('pageTit')
const fspace = document.getElementById('firstSpace') 

if(y.matches){
		flexCont.className = "h5 w10 fjc fw wt ov";
		flexC1.className = "wt h8"
	    blackbox.className = "bcolb colw wt";
  		rends.className = "dn"//"w10 h6 fjsa magt1";
  		htmlr.className = "w4";
  		cssr.className = "w4";
  		tuts.className = "posf b0 r1 h1 w4 bcolb colw fs4"
  		title.className = "colb fs3 tac padt1 magb2"
  		title.style.textDecoration = "underline blue"
  		fspace.className = "dn"
  	}
}
