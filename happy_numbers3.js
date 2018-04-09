findHappyNumber(200);

function findHappyNumber(number) {
//let squareArray = [];
//let happyIntegers = [];
//let sumHappy = 0;
let numberString = number.toString();
	
	function splitToString(number) {
	let numberArray = numberString.split(""); // split the number into its component parts
	//step 2: take the square of array[0]
	}
	
	function getSquareRoot(numberArray){
		let squareRootArray = [];
		for (i=0; i < numberArray.length; i++) {
			squareRootArray.push(Math.sqrt(numberArray[i]));
		}
		
	}
	
	function makeIntegers(squareRootArray) {
		let happyIntegers = [];
		for (i=0; i < squareRootArray.length; i++) {
			happyIntegers.push(Math.floor(squareRootArray[i]));
		}
	}
	
	function addHappyIntegers(happyIntegers){
		for (i=0; i < happyIntegers.length; i++) {
			let sumHappy = happyIntegers.reduce();
			}
	}

	function checkHappy(sumHappy) {
		if (sumHappy == 1) {
			console.log(number + " is happy!");
	