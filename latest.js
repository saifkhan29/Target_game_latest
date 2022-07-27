document.activeElement.blur();
var player = GetPlayer();
var TE1 = player.GetVar("TextEntry22");
TE1 = TE1.trim();


if(TE1.length > 9){
player.SetVar("enable", 1);
}else{
player.SetVar("enable", 0);
}


