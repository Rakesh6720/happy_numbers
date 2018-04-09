findHappyNumber(200);

function findHappyNumber(number) {
	
	let numberArray = number.split(""); // split the number into its component parts
	//step 2: take the square of array[0]
	
	do {
		let squareArray[i] = Math.sqrt(numberArray[i]);
		i++;
	}
	while (i < numberArray.length);
	
	do {
		let happyInteger[i] = Math.floor(squareArray[i]);
		i++;
	}
	while (i < numberArray.length);
	
	do {
		let sumHappy = happyInteger[i] + happyInteger[i+1];
	}
	while (i < numberArray.length);
	
	for (i=0; i < numberArray.length; i++) {
		if {
			sumHappy !== 1;
		}
		else {
			console.log(sumHappy);
		}
	}
}