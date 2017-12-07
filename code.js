var self = this;
function Intro(msg)
{
  this.msg = msg;
return window.alert(this.msg.toString());
}
window.addEventListener("load",function(){
  window.Intro("welcome to zeke taylor's website!!!");
},true);
