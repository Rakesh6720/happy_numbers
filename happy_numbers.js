A happy number is defined by the following process: Starting with any positive integer, 
replace the number by the sum of the squares of its digits in base-ten, and repeat the 
process until the number either equals 1 (where it will stay), or it loops endlessly in a 
cycle that does not include 1. Those numbers for which this process ends in 1 are happy numbers, 
while those that do not end in 1 are unhappy numbers (or sad numbers).[1]

step 1: break the number into an array with discreet elements
number.split("") //split the number into its component parts
array.split("")
step 2: take the square of array[0] using the Math.sqrt() method
step 3: round the square of array[0] down to the nearest integer using Math.floor()
step 4: take the square of array [1] using the Math.sqrt() method
step 5: round the square of array[1] down to the nearest integer using Math.floor()
step 6: add the values of the two squares together
//square of array[1] as integer + square of array [2] as integer = newNumber
step 5: add 1 to the original number and repeat the process until newNumber = 1






function findHappyNumber(number) {
	
	let numberArray = number.split(""); // split the number into its component parts
	//step 2: take the square of array[0]
	let squareArray[i] = Math.sqrt(numberArray[i]);
	let squareArray[0] = Math.sqrt(numberArray[0]);
	//step 3: round squareArray[0] down to the nearest integer
	let happyIntegerZero = Math.floor(squareArray[0]);
	//step 4: take the square of array[1]
	let squareArray[1] = Math.sqrt(numberArray[1]);
	//step 5: round squareArray[1] down to the nearest integer 
	let happyIntegerOne = Math.floor(squareArray[0]);
	//step 6: add the values of the two integers
	let sumHappy = happyIntegerZero + happyIntegerOne
	//step 7: check to see if sumHappy == 1 is true
	if sumHappy == 1 then stop
	//step 8: if sumHapy == 1 is not true then add 1 to number and repeat (but when does it stop?)
	else repeat the loop //where does the loop start?
	
	if (sumHappy == 1) {
		console.log(sumHappy);
	}
	else {
	
	//what would a Do / While loop look like here?
	
	while (sumHappy !== 1);
	

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
	
	let squareArray[0] = Math.sqrt(numberArray[0]);
	//step 3: round squareArray[0] down to the nearest integer
	let happyIntegerZero = Math.floor(squareArray[0]);
	//step 4: take the square of array[1]
	let squareArray[1] = Math.sqrt(numberArray[1]);
	//step 5: round squareArray[1] down to the nearest integer 
	let happyIntegerOne = Math.floor(squareArray[0]);
	//step 6: add the values of the two integers
	let sumHappy = happyIntegerZero + happyIntegerOne
	//step 7: check to see if sumHappy == 1 is true
	if sumHappy == 1 then stop
	//step 8: if sumHapy == 1 is not true then add 1 to number and repeat (but when does it stop?)
	else repeat the loop //where does the loop start?
	
	
	
	
	
	
	
	
	
	
	
	
	