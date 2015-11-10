function reverse(string){
	if (string[0] === "" || string[0] === undefined){
		return "";
	} else {
		return reverse(string.slice(1)) + string[0];
	}
}

function factorial(n){
	if (n === 0){
		return 1;
	} else {
		return factorial(n-1) * n;
	}
}

function longestWord(sentence){
	var words = sentence.split(" ");
	var champion = "";
	for (i=0;i<words.length;i++){
		if (words[i].length > champion.length){
			champion = words[i];
		}
	}
	return champion;
}

function sumNums(num){
	if (num === 0){
		return 0;
	} else {
		return num + sumNums(num-1);
	}
}

function timeConversion(minutes){
	var hours = Math.floor(minutes/60).toString();
	var newMinutes = (minutes%60).toString();
	if (newMinutes.length === 1){
		newMinutes = "0" + newMinutes;
	}
	return hours + ":" + newMinutes;
}

function countVowels(string){
	if (string[0] === "" || string[0] === undefined){
		return 0;
	} else if (string[0].match(/[aeiou]/)){
		return 1 + countVowels(string.slice(1));
	} else {
		return countVowels(string.slice(1));
	}
}

function palindrome(string){
	var reversed = string.split("").reverse().join("");
	if (reversed === string){
		return true;
	} else {
		return false;
	}
}

function nearbyAz(string){
	var adex = string.indexOf("a")
	var zdex = string.indexOf("z")
	if (adex < 0 || zdex < 0){
		return false;
	} else {
		var chopped = string.split("a");
		var check = false;
		for (i=0;i<chopped.length;i++){
			if (chopped[i].indexOf("z") < 3 && chopped[i].indexOf("z") > 0) {
				check = true;
			} 
		}
	}
	return check;
}

function twoSums(nums){
	for(i=0;i<nums.length;i++){
		if (nums.indexOf(0 - nums[i]) > 0){
			return [i, nums.indexOf(0 - nums[i])];
		}
	} 
	return "nil";
}

function powerOfTwo(num){
	if (Math.log2(num)%1 === 0){
		return true
	} else {
		return false; 
	}
}

function thirdGreatest(nums){
	var sorted = nums.sort(function(a,b){return a - b})
	return sorted[sorted.length - 3];	
}

function mostCommonLetter(string){
	var sorted = string.split("").sort();
	var counter = 0;
	var lastCount = 0;
	for (i=1;i<sorted.length;i++){
		if (sorted[i] === sorted[i-1]) {
			counter++;
			if (counter > lastCount){
				lastCount = counter;
				var bestLetter = sorted[i]
			}
		} else {
			counter = 0;
		}	
	}
	return [bestLetter, lastCount + 1];
}


function dasherizeNumber(num){
	debugger;
	var strSplit = num.toString().split("");
	for(i=0;i<strSplit.length;i++){
		if(strSplit[i] === "-") {
			console.log("cool");
		} else if (Number(strSplit[i])%2 != 0){
			strSplit.splice(i, 0, "-")
		}
	}
	console.log(strSplit);
}


