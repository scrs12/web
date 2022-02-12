function getRandomNumber(){
  var randomNum = Math.floor((Math.random() * 500));
  document.getElementById("randomNum").innerHTML = randomNum;
}