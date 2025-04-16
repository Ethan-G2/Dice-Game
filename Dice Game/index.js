function mainFunction(){
    var randomNum = Math.floor((Math.random()*6)+1);
    var randomNum2 = Math.floor((Math.random()*6)+1);
if(randomNum == 1){
    document.querySelector("img.img1").src="Images/dice1.png"
}    
else if(randomNum == 2){
    document.querySelector("img.img1").src="Images/dice2.png"
}   
else if(randomNum == 3){
    document.querySelector("img.img1").src="Images/dice3.png"  
}   
else if(randomNum == 4){
    document.querySelector("img.img1").src="Images/dice4.png"
}   
else if(randomNum == 5){
    document.querySelector("img.img1").src="Images/dice5.png"
}  
else if(randomNum == 6){
    document.querySelector("img.img1").src="Images/dice6.png"
}   


if(randomNum2 == 1){
    document.querySelector("img.img2").src="Images/dice1.png"
}    
else if(randomNum2 == 2){
    document.querySelector("img.img2").src="Images/dice2.png"
}   
else if(randomNum2 == 3){
    document.querySelector("img.img2").src="Images/dice3.png"  
}   
else if(randomNum2 == 4){
    document.querySelector("img.img2").src="Images/dice4.png"
}   
else if(randomNum2 == 5){
    document.querySelector("img.img2").src="Images/dice5.png"
}  
else if(randomNum2 == 6){
    document.querySelector("img.img2").src="Images/dice6.png"
}   


if(randomNum > randomNum2){
document.querySelector("h1").innerText= "Player One Wins🚩"
}
else if(randomNum < randomNum2){
    document.querySelector("h1").innerText= "Player Two Wins🚩"
}
else if (randomNum == randomNum2){
    document.querySelector("h1").innerText= "Its a tie🚩"

}
}