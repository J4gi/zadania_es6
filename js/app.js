//ROZGRZEWKA-------------------------------------------------------------
console.group('Rozgrzewka');
//zadanie 1
const lettersInCities = (cities) => console.log(cities.map(e => e.length));

const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
lettersInCities(cities);


//zadanie 2
let currentTime = new Date();
let currentYear = currentTime.getFullYear();
const age = (dateOfBirth) => console.log(dateOfBirth.map(year => currentYear - year));

const years = [1995, 1856, 2014, 1987];
age(years);


//zadanie 3
const calculations = numbers => {
  let sum = 0,
    multiplyResult = 1;
  for (let number of numbers) {
    sum += number;
    multiplyResult *= number;
  }
  console.log(`suma: ${sum}, iloczyn: ${multiplyResult}`);
};

const numbers = [22, 17, 39, 42, 3, 71];
calculations(numbers);

//zadanie 4
const dataFiltering = function() {
  fetch("http://domanart.pl/CODERS/zagadki/tablice-es6/dane.json")
    .then(response => response.json()) //Zamienic na odpowiedni format
    .then(response => {

      //--------------------------------------------------//
      console.group("Wszyscy użytkownicy");
      console.log(response.users.map(user => user));
      console.groupEnd();

      //-------------------------------------------------//
      console.group("Wszyscy użytkownicy penoletni");
      console.log(response.users.filter(user => user.age > 18));
      console.groupEnd();

      //------------------------------------------------//
      console.group("Wszystkie kobiety");
      console.log(response.users.filter(user => user.gender === 'female'));
      console.groupEnd();

      //------------------------------------------------//
      console.group('Użytkownicy z tagiem "dolor"');
      console.log(response.users.filter(user => user.tags.includes('dolor')));
      console.groupEnd();

      //------------------------------------------------//
      console.group('Wszyscy użytkownicy są pełnoletni:');
      console.log(response.users.every(user => user.age > 18));
      console.groupEnd();

      //------------------------------------------------//
      console.group('Niektórzy użytkownicy są pełnoletni:');
      console.log(response.users.some(user => user.age > 18));
      console.groupEnd();

      //------------------------------------------------//
      console.group("Nazwy użytkowników wypisane dużymi literami:");
      console.log(response.users.map(user => user.name.toUpperCase()));
      console.groupEnd();
    });
};

dataFiltering();
console.groupEnd();

//ARROW FUNCTIONS, SPREAD REST etc-------------------------------------------

//zadanie 1
const saySomething = ({
    name,
    age,
    proffesion
  }) =>
  `Cześć mam na imię ${name}, mam ${age} lata i moim zajęciem jest ${proffesion}.`;

const wally = {
  name: "Wally",
  age: 2,
  proffesion: "Naprawianie innych robotów"
};


//zadanie 2

(function IIFE(parametr){
  return parametr;
})();

//(parametr => parametr)();


//zadanie 3
const msgHelloCounter = (number = 6) => {
  let counter = 0;
  const intervalID = setInterval(() => {
    counter++;
    console.log(`_"Hello"_ ${counter} `);
    if (counter === number) {
      clearInterval(intervalID);
    }
  }, 500);
};


//zadanie 5
const sayHello = (...names) => {
  for (let name of names) {
    console.log(`Hello: ${name}`);
  }
};


//zadanie 6
const getAverage = (...numbers) => {
  let sum = 0,
    i = 0;
  for (let number of numbers) {
    sum += number;
    i++;
  }
  if (i === 0) {
    return 0;
  }
  return sum / i;
};



//KLASY---------------------------------------------------
console.group('Klasy');
//zadanie 1
console.group('Kaczka');

class Kaczka {
  constructor() {
    this.type = 'zwykła kaczka';
  }

  sayQuak() {
    console.log('kwa kwa');
  }

  swim() {
    console.log('płynę...');
  }

  display() {
    console.log(`Wygląda jak ${this.type}.`);
  }
}

const kaczuszka = new Kaczka();
kaczuszka.sayQuak();
kaczuszka.swim();
kaczuszka.display();

console.groupEnd();


//zadanie 2
console.group('DzikaKaczka');

class DzikaKaczka extends Kaczka {
  constructor(type) {
    super(type);
    this.type = 'dzika';
  }
}

const dzikaKaczuszka = new DzikaKaczka();
dzikaKaczuszka.sayQuak();
dzikaKaczuszka.swim();
dzikaKaczuszka.display();

console.groupEnd();


//zadanie 3 -inny konstruktor
console.group('KrzyzowkaKaczka');
class KrzyzowkaKaczka extends Kaczka {
  constructor(type = 'krzyżówka') {
    super(type);
    this.type = type;
  }
}

const krzyzoKaczuszka = new KrzyzowkaKaczka();
krzyzoKaczuszka.sayQuak();
krzyzoKaczuszka.swim();
krzyzoKaczuszka.display();

console.groupEnd();


//zadanie 4
console.group('fly');

//"normalna" metoda
Kaczka.prototype.fly = function() {
  console.log('Lecę');
};

kaczuszka.fly();
dzikaKaczuszka.fly();
krzyzoKaczuszka.fly();


// --------'static' Metoda----------
/*
Kaczka.fly = function(){
  console.log('Lecę');
};

Kaczka.fly();
DzikaKaczka.fly();
KrzyzowkaKaczka.fly();
*/

console.groupEnd();


//zadanie 5
console.group('GumowaKaczka');
class GumowaKaczka extends Kaczka {
  constructor(type){
    super(type);
    this.type = 'gumowa';
  }

  fly(){
    console.log('gumowe kaczki nie potrafią latać');
  }

}

const gumowaKaczuszka = new GumowaKaczka();
gumowaKaczuszka.sayQuak();
gumowaKaczuszka.swim();
gumowaKaczuszka.display();
gumowaKaczuszka.fly();
// kaczuszka.fly();
// dzikaKaczuszka.fly();
// krzyzoKaczuszka.fly();

console.groupEnd();
console.groupEnd(); //klasy
