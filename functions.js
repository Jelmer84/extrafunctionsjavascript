/* Opdracht 1 */
// Schrijf een functie die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// "Nova" geeft "Hoi Nova!"
// "Nick" geeft "Hoi Nick!"
const greet = "Hoi"

function greetings(name) {
    return greet + name + "!"
}

console.log(greetings(" Nova"));
console.log(greetings(" Nick"));

/* Opdracht 2 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"
function wordsWithCharaters(character, word) {
    return character + word + character;
}

console.log(wordsWithCharaters("*", "bril"))
console.log(wordsWithCharaters('"', "beep"))
console.log(wordsWithCharaters("Q", "kaas"))


/* Opdracht 3 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"
function arrayOfWords(wordThatHaveToBeCombined) {
    let output = "";

    for (let i = 0; i < wordThatHaveToBeCombined.length; i++) {
        output += wordThatHaveToBeCombined[i];
    }
    return output;
}

console.log(arrayOfWords(["abra", "cadabra"]));
console.log(arrayOfWords(["a", "b", "c"]));

/* Opdracht 4 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 4) geeft [204, 190, 89]
function lastEntry(array, n) {
    const lastOfArray = array.length - 1;
    if (n === undefined) {
        return array[lastOfArray];
    }
    return array.slice(lastOfArray - n, lastOfArray)
}

console.log(lastEntry([3, 6, 9, 17, 4, 6, 25, 4]));
console.log(lastEntry([46, 65, 34, 204, 190, 89], 4));
// WAAROM WORD DE 0 POSITIE IN DE TWEEDE LOG NIET GEPRINT?


/* Opdracht 5 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204
function highest(numbersArray) {
    let highest = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        if (highest < numbersArray[i]) {
            highest = numbersArray[i];
        }
    }

    return highest;
}

console.log(highest([3, 6, 9, 17, 4, 6, 25]));
console.log(highest([46, 65, 34, 204, 190, 89]));


/* Opdracht */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
function fizzBuzzTwo() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
console.log(fizzBuzzTwo());

// ALTERNATIVE
// // OPTIE 1, MET OUTPUT VARIABELE
// function fizzBuzzOne() {
//     for (let i = 1; i <= 100; i++) {
//         let output = '';
//
//         if (i % 3 === 0) {
//             output += 'Fizz';
//         }
//         if (i % 5 === 0) {
//             output += 'Buzz';
//         }
//         console.log(output || i);
//     }
// }
// console.log(fizzBuzzOne());