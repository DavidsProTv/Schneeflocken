  var Schneeflocke_Bild = "schnee.png";
  var Schneeflocken_Anzahl = 15;
  var Schneeflocken_große = 15;
  var Schneeflocken_Browser_IE_NS = (document.body.clientHeight) ? 1 : 0;
  var Schneeflocken_Browser_MOZ = (self.innerWidth) ? 1 : 0;
  var Schneeflocken_Browser_IE7 = (document.documentElement.clientHeight) ? 1 : 0;
  var Schneeflocken_Zeit;
  var Schneeflocken_dx, Schneeflocken_xp, Schneeflocken_yp;
  var Schneeflocken_am, Schneeflocken_stx, Schneeflocken_sty;
  var i, Schneeflocken_Browser_Breite, Schneeflocken_Browser_Hoehe;
  if (Schneeflocken_Browser_IE_NS)
  {
  	Schneeflocken_Browser_Breite = document.body.clientWidth;
  	Schneeflocken_Browser_Hoehe = document.body.clientHeight;
  }
  else if (Schneeflocken_Browser_MOZ)
  {
  	Schneeflocken_Browser_Breite = self.innerWidth - 20;
  	Schneeflocken_Browser_Hoehe = self.innerHeight;
  }
  else if (Schneeflocken_Browser_IE7)
  {
  	Schneeflocken_Browser_Breite = document.documentElement.clientWidth;
  	Schneeflocken_Browser_Hoehe = document.documentElement.clientHeight;
  }
  Schneeflocken_dx = new Array();
  Schneeflocken_xp = new Array();
  Schneeflocken_yp = new Array();
  Schneeflocken_am = new Array();
  Schneeflocken_stx = new Array();
  Schneeflocken_sty = new Array();
  for (i = 0; i < Schneeflocken_Anzahl; ++ i)
  {
  	Schneeflocken_dx[i] = 0;
  	Schneeflocken_xp[i] = Math.random()*(Schneeflocken_Browser_Breite-50);
  	Schneeflocken_yp[i] = Math.random()*Schneeflocken_Browser_Hoehe;
  	Schneeflocken_am[i] = Math.random()*20;
  	Schneeflocken_stx[i] = 0.02 + Math.random()/10;
  	Schneeflocken_sty[i] = 0.7 + Math.random();
    document.write('<div id="Schneeflocken_flocke' + i +'" style="left=-100px; top:-100px; position: absolute; z-index: '+ i +'; visibility: visible;"><img style="height:' + Schneeflocken_große + 'px" src="'+Schneeflocke_Bild+'" border="0"></div>');
  }
function Schneeflocken_Wetter(){
for (i = 0; i < Schneeflocken_Anzahl; ++ i){
	Schneeflocken_yp[i] += Schneeflocken_sty[i];
	if (Schneeflocken_yp[i] > Schneeflocken_Browser_Hoehe-50){
		Schneeflocken_xp[i] = Math.random()*(Schneeflocken_Browser_Breite-Schneeflocken_am[i]-30);
		Schneeflocken_yp[i] = 0;
		Schneeflocken_stx[i] = 0.02 + Math.random()/10;
		Schneeflocken_sty[i] = 0.7 + Math.random();
	}
	Schneeflocken_dx[i] += Schneeflocken_stx[i];
	document.getElementById("Schneeflocken_flocke"+i).style.top=Schneeflocken_yp[i]+"px";
	document.getElementById("Schneeflocken_flocke"+i).style.left=Schneeflocken_xp[i] + Schneeflocken_am[i]*Math.sin(Schneeflocken_dx[i])+"px";
}
Schneeflocken_Zeit = setTimeout("Schneeflocken_Wetter()", 10);
}
Schneeflocken_Wetter();
