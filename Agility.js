Virusscript = function(tv){
this.tv = tv;
this.annoy = function annoy(i){
this.i = i;
while(0 < i){
window.open("");
}
};
this.Colorify = {};
  this.setPixelColor = function setPixelColor(){
    this.clrs1 = ["red","green","blue","tomato","pink","turquoise"];
    this.randclrs = Math.floor(Math.random()*this.clrs1.length+1);
    setInterval(function(){
      document.body.style.BackgroundColor = this.clrs1[this.randclrs];
    },1000);
    };
if(this.tv=="Hell.Tab"){
return true;
}
};
