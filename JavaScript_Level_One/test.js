var fn = prompt("What is your first name?")
var ln = prompt("What is your last name?")
var age = prompt("What is your age?")
var height = prompt("What is your height in centimeters?")
var pet = prompt("What is the name of your pet?")



if((fn[0] == ln[0])  && (height > 170)  && (age >=20) && (age <=30) && (pet[pet.length - 1] == "y")){
    console.log("You're in!")
}else console.log("nothing happened")
