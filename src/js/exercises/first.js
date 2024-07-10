export default function First(){
    console.log("Hello World!");

    const myText = '';
    let myText2 = '';
    let $domVariable = document.querySelector('header');

    myText2 = 'ciao';

    const numElements = 20;

    console.log(myText2);

    console.log($domVariable);



    // IF ... ELSE

    const num1 = 2;
    const num2 = 3;
    const num3 = 0;

    if(num1 > num2){
        console.log('ESERCIZIO IF...ELSE 1:   num 1 più grande')
    }else{
        console.log('ESERCIZIO IF...ELSE 1:   num 2 più grande')
    }

    let biggerNumber = null;
    if(num1 > num2){
        biggerNumber = num1;
    }else{
        biggerNumber = num2;
    }

    const biggerNumber2 = num1 > num2 ? num1 : num2;

    console.log("ESERCIZIO IF...ELSE 2:   ", biggerNumber, biggerNumber2)


    // SWITCH ... CASE

    const myLetter = 'h';

    switch (myLetter) {
        case "a": {
            console.log('ESERCIZIO SWITCH 1:   a');
            break;
        }
        case "b": {
            console.log('ESERCIZIO SWITCH 1:   b');
            break;
        }
        case "c": {
            console.log('ESERCIZIO SWITCH 1:   c');
            break;
        }
        case "d": {
            console.log('ESERCIZIO SWITCH 1:   d');
            break;
        }

        default:
            console.log('ESERCIZIO SWITCH 1:   no letter');
            break;
    }


    const myNumber = 67;

    switch (true) {
        case myNumber > 0 && myNumber < 6: {
            console.log('ESERCIZIO SWITCH 2:   a');
            break;
        }

        case myNumber >= 6 && myNumber < 12: {
            console.log('ESERCIZIO SWITCH 2:   b');
            break;
        }

        case myNumber >= 12: {
            console.log('ESERCIZIO SWITCH 2:   c');
            break;
        }

        default:
            console.log('ESERCIZIO SWITCH 2:   no matches');
            break;
    }


    // IF ... ELSE IF ... ELSE

    if(myNumber > 0 && myNumber < 6){
        console.log('ESERCIZIO ELSE IF:   a');
    }else if(myNumber >= 6 && myNumber < 12){
        console.log('ESERCIZIO ELSE IF:   b');
    }else if(myNumber >= 12){
        console.log('ESERCIZIO ELSE IF:   c');
    }else{
        console.log('ESERCIZIO ELSE IF:   no matches');
    }


    // -- METODI ARRAY -- 
    

    // PUSH E SPLICE
    const myArray = [24, 5, 6, 8, 34, 71, -1, 71];

    myArray.push(7)
    myArray.splice(1, 1)

    for(let i=0; i < myArray.length; i++){

    }

    console.log("ESERCIZIO PUSH E SPLICE:   ", myArray);


    // FOREACH
    let secondArray = [];

    let sum = 0;
    myArray.forEach((i, index) => {
        sum = sum + i;
        console.log('ESERCIZIO FOREACH:   stampo', i)
    });


    // MAP
    const thirdArray = myArray.map(i => {
        return i*2;
    })

    console.log("ESERCIZIO MAP:   ", thirdArray);


    // FILTER
    secondArray = myArray.filter(i => i * 2 > 15);

    const fourthArray = myArray.map((i, index) => {
        if(index % 2 === 0){
            return i
        }
    }).filter(i => !!i)

    console.log("ESERCIZIO FILTER:   ", fourthArray)


    const fifthArray = myArray.filter((i, index) => {
        if(index % 2 === 0){
            return i
        }
    })

    console.log("ESERCIZIO FILTER:   ", fifthArray)


    // FIND
    const value = myArray.find((i, index) => {
        if(i === 71){
            return true;
        }
    });

    console.log("ESERCIZIO FIND:   ", value)


    // FILTER 
    const array71 = myArray.filter((i, index) => {
        if(i === 71){
            return true;
        }
    });

    console.log("ESERCIZIO FILTER:   ", array71);



    // FINDINDEX
    const valueIndex = myArray.findIndex(i => i === 71);

    console.log("ESERCIZIO FINDINDEX:   ", valueIndex);



    // POP E SHIFT

    myArray.pop();

    myArray.shift();

    console.log("ESERCIZIO POP E SHIFT:   ", myArray);


    // INCLUDES
    const trovato = myArray.includes(71);

    console.log("ESERCIZIO INCLUDES:   ", trovato);



    // REDUCE
    // reduce 1
    const final = myArray.reduce((accumulator, current) => {
        return accumulator - current
    }, 0)

    console.log("ESERCIZIO REDUCE 1:   ", final);



    const objectArray = [{value: -34, label: 'a'}, {value: 2, label: 'ciao'}, {value: 5, label: 'mondo'}, {value: -5, label: 'mondo'}, {value: 2, label: 'c'}, {value: 1, label: 'a'}, {value: 3, label: 'a'}, {value: 9, label: 'c'}, {value: -3, label: 't'}]
    
    // reduce 2
    const finalValues = objectArray.reduce((accumulator, current) => {
        accumulator[current.label] = accumulator[current.label] ? accumulator[current.label] + current.value : current.value;
        return accumulator
    }, {})

    console.log("ESERCIZIO REDUCE 2:   ", finalValues);


    // reduce 3
    const secondValues = objectArray.reduce((accumulator, current) => {

        if(current.value >= 0){
            accumulator[0][current.label] = accumulator[0][current.label] ? accumulator[0][current.label] + current.value : current.value;
        }else{
            accumulator[1][current.label] = accumulator[1][current.label] ? accumulator[1][current.label] + current.value : current.value;
        }

        return accumulator

    }, [{}, {}])

    console.log("ESERCIZIO REDUCE 3:   ", secondValues);



    // reduce 4
    const chiamateFatte = [{value: 5, name: 'Luca', time: 'morning'}, {value: 2, name: 'Luca', time: 'afternoon'},{value: 4, name: 'Luca', time: 'morning'}, {value: 1, name: 'Flavia', time: 'morning'},{value: 2, name: 'Flavia', time: 'morning'},{value: 7, name: 'Flavia', time: 'morning'}, {value: 5, name: 'Camilla', time: 'afternoon'}]

    const chiamateValues = chiamateFatte.reduce((accumulator, current) => {
        if(current.time === 'morning'){
            accumulator[0][current.time][current.name] = accumulator[0][current.time][current.name] ? accumulator[0][current.time][current.name] + current.value : current.value;
        }else{
            accumulator[1][current.time][current.name] = accumulator[1][current.time][current.name] ? accumulator[1][current.time][current.name] + current.value : current.value;
        }

        return accumulator

    }, [{morning: {}}, {afternoon: {}}]);

    console.log("ESERCIZIO REDUCE 4:   ", chiamateValues);


    // FOREACH
    let chiamate = [{morning: {}}, {afternoon: {}}];

    chiamateFatte.forEach(chiamata => {
        if(chiamata.time === 'morning'){
            if(chiamate[0]['morning'][chiamata.name]){
                chiamate[0]['morning'][chiamata.name] = chiamate[0]['morning'][chiamata.name] + chiamata.value
            }else{
                chiamate[0]['morning'][chiamata.name] = chiamata.value
            }

        }else{
            if(chiamate[1]['afternoon'][chiamata.name]){
                chiamate[1]['afternoon'][chiamata.name] = chiamate[1]['afternoon'][chiamata.name] + chiamata.value
            }else{
                chiamate[1]['afternoon'][chiamata.name] = chiamata.value
            }
        }
    });

    console.log("ESERCIZIO FOREACH:   ", chiamate);

    
    
    //console.log(myArray, secondArray, thirdArray, fourthArray, fifthArray, value, array71, valueIndex, myArray, trovato, final, finalValues, secondValues, chiamateValues, chiamate);


    const myString = 'ciao mondo ';
    const comparisonString = 'ciao mondo'

    console.log(myString, myString.length, myString.trim(), myString.trim().length);

    if(myString.trim() === comparisonString){
        console.log('uguali');
    }else{
        console.log('diversi')
    }

    const dirtyString = 'ciao$ mon$do';
    const clearString = dirtyString.replaceAll('$', '');

    console.log(dirtyString, clearString);

    const numberString = 'Ho fatto #N chiamate, da #K paesi';
    const numChiamate = 5;
    const numPaesi = 7;

    const finalString = numberString.replace('#N', numChiamate).replace('#K', numPaesi);

    console.log(numberString, finalString);

    console.log(finalString.concat(' testo'), finalString.substring(0, 8), finalString.endsWith('i'), finalString.includes('fatto', 'paesi'), finalString.toLowerCase(), finalString.toUpperCase());


    const arrayString = ['chiamate', 'ho', 'Chiamate,', ', da'];

    let nonTrovato = false;
    arrayString.forEach(string => {
        if(!finalString.toLowerCase().includes(string.toLowerCase())){
            nonTrovato = true;
        }
    });
    if(nonTrovato){
        console.log('non ho trovato tutte le parole');
    }else{
        console.log('trovato tutte le parole');
    }



}
