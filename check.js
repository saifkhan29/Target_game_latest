document.activeElement.blur();
var player = GetPlayer();
var TE1 = player.GetVar("TextEntry6");
TE1 = TE1.trim();
var TE2 = player.GetVar("TextEntry7");
TE2 = TE2.trim();
var TE3 = player.GetVar("TextEntry8");
TE3 = TE3.trim();
var TE4 = player.GetVar("TextEntry23");
TE4 = TE4.trim();
var TE5 = player.GetVar("TextEntry23");
TE5 = TE5.trim();
var TE6 = player.GetVar("TextEntry23");
TE6 = TE6.trim();

if(TE1.length > 9 && TE2.length > 9 && TE3.length > 9 && TE4.length > 9  && TE5.length > 9  && TE6.length > 9){
player.SetVar("enable", 1);
}else{
player.SetVar("enable", 0);
}


