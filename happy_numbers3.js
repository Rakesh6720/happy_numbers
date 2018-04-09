findHappyNumber(921);

function findHappyNumber(number) {
	
	let testedNumbersArray = [];

	let numberString = convertNumberToString(number);

	let numArr = splitStringToArray(numberString);
	console.log(numArr);
	
	let sqrdArr = squareOfArrayElements(numArr);
	console.log(sqrdArr);
	
	let sumHappy = addHappyIntegers(sqrdArr);
	console.log(sumHappy);
	
	checkHappy(sumHappy, number);
	
	findHappyNumber(sumHappy);
	}	

	function convertNumberToString(number) {
		let numString = number.toString();
		return numString;
	}
	
	function splitStringToArray(numberString) {
		let numberArray = numberString.split("");
		console.log(numberArray);
		return numberArray;
		}
	
	function squareOfArrayElements(numberArray){
		let squareArray = [];
		for (i=0; i < numberArray.length; i++) {
			squareArray.push(Math.pow(numberArray[i], 2));
		}
		console.log(squareArray);
		return squareArray;
	}
	
	function addHappyIntegers(happyIntegers){
		function getSum (total, num){
			return total + num;
		}
		for (i=0; i < happyIntegers.length; i++) {
			let sumHappy = happyIntegers.reduce(getSum);
			return sumHappy;
			}
	}

	function checkHappy(sumHappy, number) {
		if (sumHappy == 1) {
			console.log(number + " is happy!");
		}
		else {
			testedNumbersArray.push(sumHappy);
			findHappyNumber(sumHappy);
		}
	}

	function testNumbers(testedNumbersArray) {
		
