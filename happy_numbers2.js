findHappyNumber(200);

function findHappyNumber(number) {
//let squareArray = [];
//let happyIntegers = [];
let sumHappy = 0;
let numberString = number.toString();
	
	function splitToString(number) {
	let numberArray = numberString.split(""); // split the number into its component parts
	//step 2: take the square of array[0]
	}
	
	function getSquareRoot(numberArray[i]){
		let squareRootArray = [];
		for (i=0; i < numberArray.length; i++) {
			squareRootArray.push(Math.sqrt(numberArray[i]));
		}
		
	}
	
	function makeIntegers(squareRootArray[i]) {
		let happyIntegers = [];
		for (i=0; i < numberArray.length; i++) {
			happyIntegers.push(Math.floor(squareRootArray[i]));
		}
	
	function addHappyIntegers(happyIntegers[i]){
		for (i=0; i < numberArray.length; i++) {
			

	
	do {
		//squareArray[i] = Math.sqrt(numberArray[i]);
		//i++;
		squareArray.push(Math.sqrt(numberArray[i]));
		i++;
	}
	while (i < numberArray.length);
	
	do {
		happyInteger.push(Math.floor(squareArray[i]));
		i++;
	}
	while (i < numberArray.length);
	
	do {
		sumHappy = sumHappy + happyInteger[i] + happyInteger[i+1];
	}
	while (i < numberArray.length);
	
	for (i=0; i < numberArray.length; i++) {
		if (sumHappy == 1) {
			console.log(number + " is happy.");
		}
		else {
			
		}
	}
}