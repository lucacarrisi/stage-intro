export default function First(){
    console.log("Hello World!");

    const myText = '';
    let myText2 = '';
    let $domVariable = document.querySelector('header');

    myText2 = 'ciao';

    const numElements = 20;

    console.log(myText2);

    console.log($domVariable);


    const num1 = 2;
    const num2 = 3;
    const num3 = 0;

    if(num1 > num2){
        console.log('num 1 più grande')
    }else{
        console.log('num 2 più grande')
    }

    let biggerNumber = null;
    if(num1 > num2){
        biggerNumber = num1;
    }else{
        biggerNumber = num2;
    }

    const biggerNumber2 = num1 > num2 ? num1 : num2;

    console.log(biggerNumber, biggerNumber2)

    const myLetter = 'h';

    switch (myLetter) {
        case "a": {
            console.log('a');
            break;
        }
        case "b": {
            console.log('b');
            break;
        }
        case "c": {
            console.log('c');
            break;
        }
        case "d": {
            console.log('d');
            break;
        }

        default:
            console.log('no letter');
            break;
    }


    const myNumber = 67;

    switch (true) {
        case myNumber > 0 && myNumber < 6: {
            console.log('a');
            break;
        }

        case myNumber >= 6 && myNumber < 12: {
            console.log('b');
            break;
        }

        case myNumber >= 12: {
            console.log('c');
            break;
        }

        default:
            console.log('no matches');
            break;
    }

    if(myNumber > 0 && myNumber < 6){
        console.log('a');
    }else if(myNumber >= 6 && myNumber < 12){
        console.log('b');
    }else if(myNumber >= 12){
        console.log('c');
    }else{
        console.log('no matches');
    }


    const myArray = [24, 5, 6, 8, 34, 71, -1, 71];

    myArray.push(7)
    myArray.splice(1, 1)

    for(let i=0; i < myArray.length; i++){

    }

    let secondArray = [];

    let sum = 0;
    myArray.forEach((i, index) => {
        sum = sum + i;
        console.log('stampo', i)
    });

    const thirdArray = myArray.map(i => {
        return i*2;
    })

    secondArray = myArray.filter(i => i * 2 > 15);

    const fourthArray = myArray.map((i, index) => {
        if(index % 2 === 0){
            return i
        }
    }).filter(i => !!i)

    const fifthArray = myArray.filter((i, index) => {
        if(index % 2 === 0){
            return i
        }
    })

    const value = myArray.find((i, index) => {
        if(i === 71){
            return true;
        }
    });

    const array71 = myArray.filter((i, index) => {
        if(i === 71){
            return true;
        }
    });

    const valueIndex = myArray.findIndex(i => i === 71);

    myArray.pop();

    myArray.shift();

    const trovato = myArray.includes(71);

    const final = myArray.reduce((accumulator, current) => {
        return accumulator + current
    }, 0)

    const objectArray = [{value: -34, label: 'a'}, {value: 2, label: 'ciao'}, {value: 5, label: 'mondo'}, {value: -5, label: 'mondo'}, {value: 2, label: 'c'}, {value: 1, label: 'a'}, {value: 3, label: 'a'}, {value: 9, label: 'c'}, {value: -3, label: 't'}]

    const finalValues = objectArray.reduce((accumulator, current) => {

        accumulator[current.label] = accumulator[current.label] ? accumulator[current.label] + current.value : current.value;

        return accumulator

    }, {})


    const secondValues = objectArray.reduce((accumulator, current) => {

        if(current.value >= 0){
            accumulator[0][current.label] = accumulator[0][current.label] ? accumulator[0][current.label] + current.value : current.value;
        }else{
            accumulator[1][current.label] = accumulator[1][current.label] ? accumulator[1][current.label] + current.value : current.value;
        }

        return accumulator

    }, [{}, {}])

    const chiamateFatte = [{value: 5, name: 'Luca', time: 'morning'}, {value: 2, name: 'Luca', time: 'afternoon'},{value: 4, name: 'Luca', time: 'morning'}, {value: 1, name: 'Flavia', time: 'morning'},{value: 2, name: 'Flavia', time: 'morning'},{value: 7, name: 'Flavia', time: 'morning'}, {value: 5, name: 'Camilla', time: 'afternoon'}]

    const chiamateValues = chiamateFatte.reduce((accumulator, current) => {
        if(current.time === 'morning'){
            accumulator[0][current.time][current.name] = accumulator[0][current.time][current.name] ? accumulator[0][current.time][current.name] + current.value : current.value;
        }else{
            accumulator[1][current.time][current.name] = accumulator[1][current.time][current.name] ? accumulator[1][current.time][current.name] + current.value : current.value;
        }

        return accumulator

    }, [{morning: {}}, {afternoon: {}}]);



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
    })



    console.log(myArray, secondArray, thirdArray, fourthArray, fifthArray, value, array71, valueIndex, myArray, trovato, final, finalValues, secondValues, chiamateValues, chiamate)
}
