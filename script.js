let reason=function(choice1,choice2){

    if(choice1===choice2){
    	return "Because both are equal ";
    }

	else if ( (choice1==="scissors" && choice2==="paper") || (choice2==="scissors" && choice1==="paper")    ){
		return " Because Scissors cuts Paper ";
	}

	else if ((choice1==="paper" && choice2==="rock") || (choice2==="paper" && choice1==="rock") ) {
		return "Because Paper covers Rock";
	}

	else if ((choice1==="rock" && choice2==="lizard") || (choice2==="rock" && choice1==="lizard") ){
		return "Because Rock crushes Lizard";
	}

	else if ( (choice1==="lizard" && choice2==="spock") || (choice2==="lizard" && choice1==="spock") ){
		return "Because Lizard poisons Spock.";
	}

	else if ((choice1==="spock" && choice2==="scissors") ||(choice2==="spock" && choice1==="scissors")){
		return "Because Spock smashes Scissors.";
	}

	else if ((choice1==="scissors" && choice2==="lizard")|| (choice2==="scissors" && choice1==="lizard")){
		return "Because Scissors decapitates Lizard. ";
	}

	else if ((choice1==="lizard" && choice2==="paper") || (choice2==="lizard" && choice1==="paper") ){
		return "Because Lizard eats Paper";
	}

	else if ( (choice1==="paper" && choice2==="spock") || (choice2==="paper" && choice1==="spock") ){
		return "Because Paper disproves Spock";
	}

	else if ((choice1==="spock" && choice2==="rock")  || (choice2==="spock" && choice1==="rock") ){
		return "Because Spock vaporizes rock. ";
	}
    
    else if( (choice1==="rock" && choice2==="scissors") || (choice2==="rock" && choice1==="scissors") ){
		return "Because Rock crushes Scissors ";
	}



};

let compare= function (choice1 , choice2){


	if (choice1===choice2)
		return "Its a tie"
    
    if (choice1==="rock"){

         if (choice2 ==="paper" || choice2==="spock")
         	return "You lose";
         else
         	return "You win";

    
    }

    else if (choice1==="paper"){

         if (choice2 ==="scissors" || choice2==="lizard")
         	return "You lose";
         else
         	return "You win";


    }

    else if (choice1==="scissors"){

         if (choice2 ==="rock" || choice2==="spock")
         	return "You lose";
         else
         	return "You win";
    }

    else if (choice1==="lizard" ){

         if (choice2 ==="rock" || choice2==="scissors")
         	return "You lose";
         else
         	return "You win";
    }


    else if (choice1==="spock"){

         if (choice2 ==="paper" || choice2==="lizard")
         	return "You lose";
         else
         	return "You win";
    }
    

    };



document.getElementById('rock').addEventListener('click', function (e) {

	let userChoice= "rock"
	//let computerChoice = Math.random();
	let computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=0.60){
	computerChoice = "scissors";
} else if(computerChoice <=0.80){
	computerChoice = "lizard";
} else if(computerChoice <=1){
	computerChoice = "spock";
} 

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose rock " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});


document.getElementById('paper').addEventListener('click', function (e) {
	
	let userChoice= "paper"
	let computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=0.60){
	computerChoice = "scissors";
} else if(computerChoice <=0.80){
	computerChoice = "lizard";
} else if(computerChoice <=1){
	computerChoice = "spock";
}

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose paper " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);


});


document.getElementById('scissors').addEventListener('click', function (e) {
	
	let userChoice= "scissors"
	let computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=0.60){
	computerChoice = "scissors";
} else if(computerChoice <=0.80){
	computerChoice = "lizard";
} else if(computerChoice <=1){
	computerChoice = "spock";
}

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose scissors " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});

document.getElementById('lizard').addEventListener('click', function (e) {
	
	let userChoice= "lizard"
	let computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=0.60){
	computerChoice = "scissors";
} else if(computerChoice <=0.80){
	computerChoice = "lizard";
} else if(computerChoice <=1){
	computerChoice = "spock";
}

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose lizard " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});

document.getElementById('spock').addEventListener('click', function (e) {
	
	let userChoice= "spock"
	let computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=0.60){
	computerChoice = "scissors";
} else if(computerChoice <=0.80){
	computerChoice = "lizard";
} else if(computerChoice <=1){
	computerChoice = "spock";
}

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose spock " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});