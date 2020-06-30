// ----------- EXERCISE 1 ----------
console.log("-----EXERCISE 1-----")

if (true) {
    console.log("Condition is working !");
  }
  
  if (false) {
    console.log("Condition is working !");
  }
  else{
      console.log("condition is not working");
  }

  if (false === false) {
    console.log("Condition is working !");
  }
  

 // ----------- EXERCISE 2 ----------
console.log("-----EXERCISE 2-----") 

var content = "texte"

if (content) {
    console.log("Condition is OK");
  }
  else {
    console.log("Condition is KO");
  }

  // ----------- EXERCISE 3 ----------
console.log("-----EXERCISE 3-----")  

var price = "forty five"

if (price === "45") {
    console.log("The price is a number");
  }
  else if (price == 45) {
    console.log("The price is a string");
  }
  else {
    console.log("The price is something else");
  }

    // ----------- EXERCISE 4 ----------
console.log("-----EXERCISE 4-----")  

var age = 18

if(age >= 18){
    console.log("Entry allowed")
}
else{
    console.log("Entry not allowed")
}

    // ----------- EXERCISE 5 ----------
    console.log("-----EXERCISE 5-----")  


    var store = ["Walmart", "Colorado", "South-Park", 483];

if (store[0] === "Walmart" && store[2] === "South-Park") {
  console.log("The Walmart in South-Park has " + store[3] + " employes")
}

else if (store[0] === "Walmart" && store[1] === "Colorado") {
  console.log("Hum this is an other Walmart from Colorado");
}

else if (store[0] === "Walmart" ) {
  console.log("Too bad this is just a Walmart");
}

else {
  console.log("I don't know what is this");
}

    // ----------- EXERCISE 6 ----------
    console.log("-----EXERCISE 6-----")  

var student = {
     Name:"Jonh Doe",
     Grade:16
}

if(student["Grade"] < 10){
    console.log("Recalé")
}
else if(student["Grade"] >= 10 && student["Grade"] <= 12){
    console.log("Passable")
}
else if(student["Grade"] >= 12 && student["Grade"] <= 14){
    console.log("Moyen")
}
else if(student["Grade"] >= 14 && student["Grade"] <= 16){
    console.log("Bien")
}
else if(student["Grade"] >= 16 && student["Grade"] <= 20){
    console.log("Trés bien")
}
else{
    console.log(" Oulala tu as + que 20 ou - que 0 : va voir ton prof ")
}


    // ----------- EXERCISE 7 ----------
    console.log("-----EXERCISE 7-----")  

var meal = {
    foodType:"meat",
    cookedAt: 80,
    temperature:80,
    status: undefined
}

if(meal["cookedAt"] === meal["temperature"]){
   
     meal["status"] = "cooked"
     console.log(meal["status"]);
}

 else if(meal["temperature"] < meal["cookedAt"]){
   
    meal["status"] = "Uncooked"
    console.log(meal["status"]);
}
else{
    meal["status"] = "Overcooked"
    console.log(meal["status"]);
};



// ----------- EXERCISE 8 ----------
console.log("-----EXERCISE 8-----")  

var number = 200
if (number > 0) {
    if(number%2 === 0) {           
        console.log("number is even");           
    }           
    else {
        console.log("number is odd");
    }
}
else {
    console.log("Please enter a number at least greater than 0");
} 