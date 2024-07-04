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
         let thirdArrayDo = []
        let n = Math.floor(Math.random() * 201) - 100;

        while (n !== -1){
            thirdArray.push(n);
            n = Math.floor(Math.random() * 201) - 100;
        }

        let k;

        do{
            k = Math.floor(Math.random() * 201) - 100;
            thirdArrayDo.push(k);
        }while(k !== -1)


        
        console.log(thirdArray, thirdArray.length, thirdArrayDo);

    
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

        const sixthArray = [{value: -34, key: 'a'}, {value: 2, key: 'b'}, {value: 5, key: 'c'}, {value: 5, key: 'kk'}, {value: -5, key: 'c'}, {value: 2, key: 'c'}, {value: 1, key: 'a'}, {value: 3, key: 'a'}, {value: -102, key: 'b'}, {value: 9, key: 'c'}, {value: -3, key: 't'}];

        const seventhArray = sixthArray.reduce((accumulator, current) => {

            if(accumulator.find(item => item.key === current.key)){
                const currentIndex = accumulator.findIndex(item => item.key === current.key);
                accumulator[currentIndex].value = accumulator[currentIndex].value + current.value
            }else{
                accumulator.push(current);
            }

            return accumulator;

        }, []);
        
        console.log(seventhArray);
    
    

        
        
}