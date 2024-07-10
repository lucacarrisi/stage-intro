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

        console.log("ESERCIZIO 1:   ", firstArray, secondArray);


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


        
        console.log("ESERCIZIO 2:   ", thirdArray, thirdArray.length, thirdArrayDo);

    
    //3. Creare un array di 5 oggetti, dove ogni oggetto deve contenere le chiavi 'name', 'age', restituire il numero di oggetti con 'age' >= 18; !N.B. l'età può essere compresa tra 0 e 99

        const fourthArray = [{ name: 'Flavia', age: 27 }, { name: 'Mario', age: 53 }, { name: 'Luigi', age: 12 }, { name: 'Anna', age: 78 }, { name: 'Rosa', age: 4 }];

        const fifthArray = fourthArray.filter(obj => {
            if (obj.age > 0 && obj.age < 99) {
                 if (obj.age > 18) {
                    return obj
                }
            }
        })

        console.log("ESERCIZIO 3:   ", fifthArray.length, fifthArray);

        
    //3. Creare un array di 5 oggetti, dove ogni oggetto deve contenere le chiavi 'name', 'age', 'genre', restituire in due array suddivisi per genere M o F, il numero di oggetti con 'age' >= 18; !N.B. l'età può essere compresa tra 0 e 99

        const arrayA = [{ name: 'Flavia', age: 27, genre: "f" }, { name: 'Mario', age: 53, genre: "m" }, { name: 'Luigi', age: 12, genre: "m" }, { name: 'Anna', age: 78, genre: "f" }, { name: 'Rosa', age: 4, genre: "f" }];


        const arrayB = arrayA.filter(item => {
            if (item.age > 0 && item.age < 99) {
                 if (item.age >= 18) {
                    return item;
                }
            }
        })

        const arrayC = arrayB.reduce((accumulator, current) => {
            if (current.genre === "f") {
                accumulator[0].push(current); 
            } else {
                accumulator[1].push(current);
            }
            return accumulator;
        },[[], []])

        // const arrayC = arrayB.reduce((accumulator, current) => {
        //     if (current.genre === "f") {
        //     accumulator[0][current.genre] = accumulator[0][current.genre] ? accumulator[0][current.genre] + current.name + current.age : current.name + current.age;
 
        //     } else {
        //     accumulator[1][current.genre] = accumulator[1][current.genre] ? accumulator[1][current.genre] + current.name + current.age : current.name + current.age;
        //     }
        //     return accumulator;
        // },[[{f: {}}], [{m: {}}]])

        console.log(arrayC);


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
        
        console.log("ESERCIZIO 4:   ", seventhArray);
    

//5. Dato un array di stringhe
//   ['? ciao', 'mia parola', 'ca$sa', 'va$lo$ri', 'pensiero #R ', 'lu!ca?', '$$?', '$?='] e un array di caratteri speciali ['$', '?', '^', '#'], ed un simbolo noto #R
//   copia in un terzo array il primo array, ripulito dai caratteri speciali indicati nel secondo array, e dagli spazi in eccesso prima e dopo la stringa, e sostituisce all'occorenza del simbolo #R con 99

let a = ['? ciao', 'mia parola', 'ca$sa', 'va$lo$ri', 'pensiero #R ', 'lu!ca?', '$$?', '$?='];
let b = ['$', '?', '^', '#'];
const x = '#R';
const y = 99;

let cleanA = a.map( item => {
	if (item.includes(x)){
		item = item.replaceAll(x, y);
	}
	for( let i=0; i<b.length; i++){
		if(item.includes(b[i])){
			item = item.replaceAll(b[i], "");
		}
	}
    item = item.trim();
    return item;
});

console.log("array iniziale: ", a);
console.log("array ripulito: ", cleanA);


//6. Dato un array di oggetti con chiavi 'name', 'words', [{name: 'Luca', 'words': 'esercizio numero % 1'}, {name: 'Flavia', 'words': 'esercizio numero 2'}, ...] ed un array di caratteri speciali ['?', '!', '[', ']', '%']
//   Restituisce in un altro array solo i nomi di chi non ha caratteri speciali nella stringa es ['FLavia', ...]

const oggetti = [{name: 'Luca', words: 'esercizio numero % 1'}, {name: 'Flavia', words: 'esercizio numero 2'}, {name: 'Mario', words: 'esercizio [] numero 2'}, {name: 'Luigi', words: 'ciao ciao'}];
const speciali = ['?', '!', '[', ']', '%'];

let names = [];
oggetti.forEach ( item => {
	
    let presente = false;

	for (let i=0; i<speciali.length; i++){
		if (item.words.includes(speciali[i])){
			presente = true;
            break;
		}
    }  
    if (!presente){
        names.push(item.name);
    }
});

console.log("ESERCIZIO 6: ", names);


}