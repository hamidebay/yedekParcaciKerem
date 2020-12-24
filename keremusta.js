let yedekParca = [
  "buji ",
  "lastik ",
  "akü ",
  "motor ",
  "cam ",
  "ayna ",
  "far anahtari ",
  "sis fari",
  "geri vites müsürü 6 vites",
  "motor kulagi: L1,6",
];

// change the array elements to uppercase
function changeToUpperCase() {
  let newList = [];
  for (let index = 0; index < yedekParca.length; index++) {
    let ueruen = yedekParca[index];
    newList.push(ueruen.toUpperCase());
  }
  console.log("Büyük harflerle yazilmis hali: " + newList);
}

// delete the numbers from yedekParca array
let newYedekParcaArray = [];
function deleteNumbersFromArray() {
  for (let index = 0; index < yedekParca.length; index++) {
    let element = yedekParca[index];
    element.split("");
    let usingArrayFrom = Array.from(element);
    newYedekParcaArray.push(usingArrayFrom);
  }
  newYedekParcaArray[8].splice(18, 1);
  newYedekParcaArray[9].splice(15, 3);
  console.log("numaralarin silinmis hali " + newYedekParcaArray);
  return newYedekParcaArray;
}

// reverse the elements from array
function reverseElementsName() {
  let reversedArray = [];
  for (let index = 0; index < newYedekParcaArray.length; index++) {
    let newElement = newYedekParcaArray[index].reverse();
    reversedArray.push(newElement);
  }
  console.log("Ters Parca ismi: " + reversedArray);
  return reversedArray;
}

// add KEREMAG_ to the beginn at each array element

//console.log("testbu " + newYedekParcaArray);

function addString() {
  const myString = "KEREMAG_";
  let myArray = [];
  for (let index = 0; index < yedekParca.length; index++) {
    let newElement = myString + yedekParca[index];

    console.log(newElement);
    myArray.push(newElement);
  }
  console.log(myArray);
}

function addDate() {
  let newArray = [];
  const date = new Date();
  for (let index = 0; index < yedekParca.length; index++) {
    let newElement = yedekParca[index] + date;

    console.log(newElement);
    newArray.push(newElement);
  }
  console.log(newArray);
}

changeToUpperCase();
deleteNumbersFromArray();
reverseElementsName();
addString();
addDate();
