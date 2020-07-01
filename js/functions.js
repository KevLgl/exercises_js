//------ EXERCISE 1 ----------
console.log("------ EXERCISE 1 ----------")

function product(a, b){
    return a*b;
};
var result =  product(3,4)
console.log("The result of the function is: " + result);


//------ EXERCISE 2 ----------
console.log("------ EXERCISE 2 ----------")

function showDigits() {

    for(let index=0; index<10 ; index++){
        console.log(index)
    }
}

showDigits();

//------ EXERCISE 3 ----------
console.log("------ EXERCISE 3 ----------")

function welcolme(firstname,lastname){
    var sentence = "Welcolme on ur site " + firstname + " " + lastname
    return sentence
}
var sentence = welcolme("John", "Doe");
console.log(sentence);

//------ EXERCISE 4 ----------
console.log("------ EXERCISE 4 ----------")

function isAdult(age){
    var autorized = false;
        if(age >=18 ){
            autorized = true;
            console.log("Welcolme on ur site")
        }
        else if(age === undefined){
            autorized= false;
        }
        else{
            console.log("sorry, u can't go on ur site")
        }
        return autorized;
};
var autorized = isAdult();
console.log(autorized);

//------ EXERCISE 5 ----------
console.log("------ EXERCISE 5 ----------")


function birthYear(age = false){
    const now = new Date();
    const thisYear = now.getFullYear();   
        if (age){
            return thisYear - age   
        }        
            return "No age given"       
}
var tonAnnée = birthYear(11);
console.log(tonAnnée)

//------ EXERCISE 6 ----------
console.log("------ EXERCISE 6 ----------")

var user = {
    firstname:"John",
    lastname:"Doe",
    age:42,
    job:"dev"
}

function indentityCard(user){
    var oneIdentity = ""
    for(prop in user){
        oneIdentity += prop + " : " + user[prop] + "\n"
    }
    return oneIdentity
};
var card = indentityCard(user)
console.log(card)



