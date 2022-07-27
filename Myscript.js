/!--Write a while loop that print out only even numbers from 1-10--/

var num = 1;
while (num < 11) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++
}


/!--Write a while loop that print out only odd numbers from 1-25 --/

var num = 1;
while (num < 25) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++
}

/!--Write a while loop that print out only numbers from 1-10 --/

var num = 1;
while (num < 11) {
    if (num % 1 === 0) {
        console.log(num);
    }
    num++
}

/!-- FOR LOOP --/

for (var i = 0; i < 5; i++) {
    console.log("num is +i");
}

/!-- FOR LOOP --/

var word = "ABCDEFGHIJK"
for (var i = 0; i < word.length; i++) {
    console.log("word[i]");
}

/!-- FOR LOOP --/

var word = "ABABABABAB"
for (var i = 0; i < word.length; i++) {
    console.log(word[i]);
}



/!-- write a loop that spies through someone's name , age and pet--/


var firstName = prompt("firstName please?")
var lastName = prompt("lastName please?")
var age = prompt("how old are you?")
var height = prompt("what is your height?")
var petName = prompt("what is your petName?")
alert("Thank you so much for your information!")


// for conditions.

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

// name conditions.

if (firstName[0] === lastName[0]) {
    nameCond = true;
} else {
    nameCond = false;
}

// age conditions.

if (age > 20 && age < 30) {
    ageCond = true;
} else {
    ageCond = false;
}

// height conditions.

if (height >= 170) {
    heightCond = true;
} else {
    heightCond = false;
}

// petname conditions.

if (petName[petName.lenght - 1] === "y") {
    petCond = true;
} else {
    petCond = false;
}

// check all conditions.

if (nameCond && ageCond && heightCond && petCond) {
    console.log("Welcome SPY!");
} else {
    console.log("sorry nothing to see here");
}