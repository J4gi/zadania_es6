//ROZGRZEWKA

//zadanie 1
const lettersInCities = (cities) => console.log(cities.map(e=>e.length));


const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
lettersInCities(cities);


//zadanie 2
let currentTime = new Date();
let currentYear = currentTime.getFullYear();
const age = (dateOfBirth) => console.log(dateOfBirth.map( year => currentYear-year));

const years = [1995, 1856, 2014, 1987];
age(years);

//zadanie 3
const calculations = (numbers) => {
  let sum=0, multiplyResult=1;
  for(let number of numbers) {
    sum+=number;
    multiplyResult*=number;
  }
console.log(`suma: ${sum}, iloczyn: ${multiplyResult}`);
};

const numbers = [22, 17, 39, 42, 3, 71];
calculations(numbers);

//zadanie 4
const dataFiltering=function(){
  fetch("http://domanart.pl/CODERS/zagadki/tablice-es6/dane.json")
    .then(response => response.json()) //Zamienic na odpowiedni format
    .then(response => {
      console.log(response);
      //--------------------------------------------------//
      console.group("Wszyscy użytkownicy");
        console.log(response.users.map( user => user));
      console.groupEnd();

      //-------------------------------------------------//
      console.group("Wszyscy użytkownicy penoletni");
        console.log(response.users.filter( user => user.age > 18));
      console.groupEnd();

      //------------------------------------------------//
      console.group("Wszystkie kobiety");
        console.log(response.users.filter( user => user.gender === 'female'));
      console.groupEnd();

      //------------------------------------------------//
      console.group('Użytkownicy z tagiem "dolor"');
        console.log(response.users.filter( user => user.tags.includes('dolor')));
      console.groupEnd();

      //------------------------------------------------//
      console.group('Wszyscy użytkownicy są pełnoletni:');
        console.log(response.users.every( user => user.age > 18));
      console.groupEnd();

      //------------------------------------------------//
      console.group('Niektórzy użytkownicy są pełnoletni:');
        console.log(response.users.some( user => user.age > 18));
      console.groupEnd();

      //------------------------------------------------//
      console.group("Nazwy użytkowników wypisane dużymi literami:");
        console.log(response.users.map( user => user.name.toUpperCase()));
      console.groupEnd();
    }); //Console log wynik
};

dataFiltering();




//ARROW FUNCTIONS, SPREAD REST ETC.
