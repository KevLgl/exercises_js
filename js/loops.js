//EXERCISE 1 
console.log("-----EXERCISE 1-----")

var i = 0;
while (i <= 9) {
  console.log("One run of the loop"+ i );
  i +=2;
}

//EXERCISE 2 
console.log("-----EXERCISE 2-----")

for (var i=0; i <=9 ; i+=2) {
    console.log("One run of the loop" + i);
  };

//EXERCISE 3
console.log("-----EXERCISE 3-----")

for(var i=0 ; i< 100; i+=2){
    console.log(i)
};
//EXERCISE 4
console.log("-----EXERCISE 4-----")


for(var i=0 ; i< 101 ; i++){
    if(i%2 === 0){
        console.log(i + " is even")
    }
    else{
        console.log(i + " is odd")
    }
}


//EXERCISE 5
console.log("-----EXERCISE 5-----")
var items =["first item","second item","third items","fourth item"]

for (var i=0; i < 4; i++) {
    console.log(items[i]);
  }
  
//EXERCISE 6
console.log("-----EXERCISE 6-----")

var customers = [
    "Albin Term",
    "Anna Sandgrove",
    "John Doe",
    "Terrance Head",
    "Yan Mock",
    "Zoe Durst"
  ];

  for (i=0; i < customers.length ; i++) {
    console.log(customers[i]);
  }
  

//EXERCISE 7
console.log("-----EXERCISE 7-----")
var items =["first item","second item","third items","fourth item"]

for(item of items){
    console.log(item)
}
//EXERCISE 8
console.log("-----EXERCISE 8-----")

var citizen = {
    firstname:"John",
    lastname:"Doe",
    age:45,
    income:60000,
    sexe:1
}

console.log("citizen identity:")
for(var prop in citizen){
    if(prop === "sexe"){
        if(citizen["sexe"] === 1){
            console.log("Tu es un homme");
        }
        else{
            console.log("Tu es une femme");
        }
    }    
    else{
        console.log(prop + " : " + citizen[prop]);
    }    
}

//EXERCISE 9
console.log("-----EXERCISE 9-----")


var citizens = [
  {
    "firstname" : "John",
    "lastname" : "Doe"
  },
  {
    "firstname" : "Anna",
    "lastname" : "Molner"
  },
  {
    "firstname" : "Harry",
    "lastname" : "Trueman"
  },
  {
    "firstname" : "Cecile",
    "lastname" : "Mercier"
  }
];

for (var citizen of citizens){
    console.log("citizen:")
    console.log(citizen)
}


