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
}