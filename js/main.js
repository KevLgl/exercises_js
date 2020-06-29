//----------------- EXERCISE 2 -----------
console.log("-----EXERCISE 2-----")

var items = ["premier element", "deuxieme element", "troisieme element","quatrieme element "];
console.log(items[1]);
console.log(items[3]);
console.log(items[0]);

//----------------- EXERCISE 3 -----------
console.log("-----EXERCISE 3-----")

var players = ["John","Doe",34,true];
console.log(players[0]);
console.log(players[1]);
console.log(players[0] + " " + players[1] );

players[2] = 40;
console.log(players[2]);

console.log(players[3]);

//----------------- EXERCISE 4 -----------
console.log("-----EXERCISE 4-----");

var player = {
    firstname:"John",
    lastname:"Doe",
    age:34,
    isAdult:true,
};

console.log(player);
console.log(player.firstname + " " + player.lastname );

player.age=40;
console.log(player.age);
console.log(player.isAdult);

//----------------- EXERCISE 5 -----------
console.log("-----EXERCISE 5-----")

var car = {
    type:"clio",
    brand:"Renault",
    date:2006,
    color:"orange",
    passenger:["Mike","Claire","Anna","Louis"]

};
car.color="noir";
console.log(car);

console.log("Une " + car.brand + " " + car.type + " de couleur " + car.color + ", modele " + car.date + " a été aperçue avec à son bord " + car.passenger.length + " passagers");

console.log(car["passenger"][0]);

console.log(car.passenger.length + " individus on été aperçu à son bord: "+ car.passenger[0]+ ", "+ car.passenger[1] + ", "+ car.passenger[2] + ", " + car.passenger[3] );

//----------------- EXERCISE 6 -----------
console.log("-----EXERCISE 6-----");

var a = 14;
var b = 38;

var product= [];


product[0] = a ;
product[1] = b ;
product[7] = 50 ;

console.log(product)

