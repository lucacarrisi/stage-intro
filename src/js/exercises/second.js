export default function Second(){

    console.log('test')

    //1. Creare un array di 25 numeri, e copiarlo in un secondo array, duplicando gli elementi in posizione pari e dimezzando quelli in posizione dispari; (stampare gli array)

        const firstArray = [5, 45, -3, 76, -36, 10, 22, -79, 34, 50, 12, -34, 5, -70, 71, -40, -37, -10, -41, -47, 12, 32, 64, 28, 32];

        // Soluzione con if...else
        const secondArray = firstArray.map((i, index) => {
            if(index % 2 === 0) {
                return i*2
            } else {
                return i/2
            }
        })

        // Soluzione con operatore ternario: migliore
        const thirdArray = firstArray.map((i, index) => {
            return index % 2 === 0 ? i*2 : i/2;
        })

        console.log(firstArray, secondArray);
        console.log(firstArray, thirdArray);
    
}