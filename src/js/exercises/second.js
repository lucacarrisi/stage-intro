export default function Second(){

    console.log('test')

    //1. Creare un array di 25 numeri, e copiarlo in un secondo array, duplicando gli elementi in posizione pari e dimezzando quelli in posizione dispari; (stampare gli array)

        let firstArray = [];
        
        for (let i = 0; i < 25; i++) {
            let num = Math.floor(Math.random() * 201) - 100;
            firstArray.push(num);
        }

        const secondArray = firstArray.map((i, index) => {
            return index % 2 === 0 ? i*2 : i/2;
        })

        console.log(firstArray, secondArray);


    //2. Creare un array di N numeri, l'inserimento si chiude quando viene inserito il numero -1, stampare array e lunghezza array;

        let thirdArray = []
        let n;

        for (let i = 0; n != -1; i++) {
            n = Math.floor(Math.random() * 201) - 100;
            thirdArray.push(n);
        }
        
        console.log(thirdArray, thirdArray.length);

    
    //3. Creare un array di 5 oggetti, dove ogni oggetto deve contenere le chiavi 'name', 'age', restituire il numero di oggetti con 'age' >= 18; !N.B. l'età può essere compresa tra 0 e 99

        const fourthArray = [{ name: 'Flavia', age: 27 }, { name: 'Mario', age: 53 }, { name: 'Luigi', age: 12 }, { name: 'Anna', age: 78 }, { name: 'Rosa', age: 4 }];

        const fifthArray = fourthArray.filter(obj => {
            if (obj.age > 0 && obj.age < 99) {
                 if (obj.age > 18) {
                    return obj
                }
            }
        })

        console.log(fifthArray.length, fifthArray);


    //4. Dato un array di oggetti
    //   [{value: -34, key: 'a'}, {value: 2, label: 'b'}, {value: 5, label: 'c'}, {value: -5, label: 'c'}, {value: 2, label: 'c'}, {value: 1, label: 'a'}, {value: 3, label: 'a'}, {value: -102, label: 'b'}, {value: 9, label: 'c'}, {value: -3, label: 't'}]
    //   creare n oggetti quante sono le chiavi, e sommando tutti i value con le stesse chiavi es [{key: 'a', value: '54'},...]

        const sixthArray = [{value: -34, key: 'a'}, {value: 2, key: 'b'}, {value: 5, key: 'c'}, {value: -5, key: 'c'}, {value: 2, key: 'c'}, {value: 1, key: 'a'}, {value: 3, key: 'a'}, {value: -102, key: 'b'}, {value: 9, key: 'c'}, {value: -3, key: 't'}];

        const seventhArray = sixthArray.reduce((accumulator, current) => {            

            // accumulator[current.key] = accumulator[current.key] ? accumulator[current.key] += current.value : current.value;
            // return accumulator;


            // if (accumulator[current.key] = accumulator[current.key]) {
            //     accumulator [current.key] = accumulator [current.key] + current.value
            // } 
            
            // let obj = {key: accumulator.key, value: accumulator.value};
            // return obj;

            switch (current.key) {
                case 'a': {
                    accumulator[0][current.key] = accumulator[0][current.key] ? accumulator[0][current.key] += current.value : current.value;
                    break;
                }
                case 'b': {
                    accumulator[1][current.key] = accumulator[1][current.key] ? accumulator[1][current.key] += current.value : current.value;
                    break;
                }
                case 'c': {
                    accumulator[2][current.key] = accumulator[2][current.key] ? accumulator[2][current.key] += current.value : current.value;
                    break;
                }
                case 't': {
                    accumulator[3][current.key] = accumulator[3][current.key] ? accumulator[3][current.key] += current.value : current.value;
                    break;
                }
                default:
                    current.value;
                    break;
            }
            
            // if (current.key === 'a') {
            //     accumulator[0][current.key] = accumulator[0][current.key] ? accumulator[0][current.key] += current.value : current.value;
            // } else {
            //     accumulator[1][current.key] = accumulator[1][current.key] ? accumulator[1][current.key] += current.value : current.value;
            // }

            // return accumulator

        }, [{key: "", value: 0}]);
        
        console.log(seventhArray);
    
    

        
        
}