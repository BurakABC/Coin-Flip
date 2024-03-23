/*function showIMG(){
    document.getElementById("img").style.visibility = "";

    setTimeout(function hideIMG(){
    document.getElementById("img").style.visibility = "hidden";
}, 3000);

HeadsORTails()

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
 function HeadsORTails() {
    if(getRandomInt == 0) {
        document.getElementById("Heads").style.visibility = ""
      } else if(getRandomInt == 1) {
        document.getElementById("Tails").style.visibility = ""
      };
    
 };

};
*/

var result;

function showIMG() {
  document.getElementById("img").style.display = "";
  document.getElementById("Tails").style.display = "none";
  document.getElementById("Heads").style.display = "none";

  setTimeout(function hideIMG() {
    document.getElementById("img").style.display = "none";
    let random = Math.floor(Math.random() * 2);
    if (random == 0) {
      document.getElementById("Heads").style.display = "";
      document.getElementById("YourResult").innerHTML = "You got Heads";
      //result = "Heads";
      return result
    } else {
      document.getElementById("Tails").style.display = "";
      document.getElementById("YourResult").innerHTML = "You got Tails";
      //result = "Tails";
      return result
    };
  }, 3000);
};


/*
if(result = "Heads") {
  document.getElementById("YourResult").innerHTML = "You got Heads";
} else if(result = "Tails"){
  document.getElementById("YourResult").innerHTML = "You got Tails";
};
*/

