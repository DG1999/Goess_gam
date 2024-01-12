var won=0, lost=0;
for(var i=1;i<=5;i++){
var goss_number=parseInt(prompt("Enter your 1 to 5 number:"));

var randam=Math.floor(Math.random()*5)+1;

if(goss_number==randam){
  document.write("<br>"+i+".Hurray..You have won random number: "+ randam+ " your number:"+ goss_number+ "<br>");
  won=won+1;
}

else{
  document.write("<br>"+i+".Ohho..You have lost random number: "+ randam+ " your nunber: " +goss_number+ " <br>");
  lost=lost+1;}
}
document.write("<br>"+"You have won:" +won+ "<br>");
 document.write("You have lost:" +lost+ "<br>");

