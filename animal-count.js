
// function animalCount(miles) {
//     const animalDensityFirst10Miles = 10;
//     const animalDensitySecond10Miles = 50;
//     const animalDensityRestMiles = 100;
//     if (miles <= 10) {
//         const count = miles * animalDensityFirst10Miles;
//         return count;
//     }
//     else if (miles <= 20) {
//         const firstDenseAnimals = 10 * animalDensityFirst10Miles;
//         const restMiles = miles - 10;
//         const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
//         const totalAnimals = firstDenseAnimals + secondDenseAnimals;
//         return totalAnimals;
//     }
//     else {
//         const firstDenseAnimals = 10 * animalDensityFirst10Miles;
//         const secondDenseAnimals = 10 * animalDensitySecond10Miles;
//         const restMiles = miles - 20;
//         const RestDenseAnimals = restMiles * animalDensityRestMiles;
//         const totalAnimals = firstDenseAnimals + secondDenseAnimals + RestDenseAnimals;
//         return totalAnimals;
//     }
// }

// const animals = animalCount(35);
// console.log(animals);



function countAnimal(miles) {
    const fast10milse = 10;
    const second10Milse = 50;
    const tird10Mile = 100;
    if (miles <= 10) {
        const fast10mileAnimal = miles * fast10milse;
        return fast10mileAnimal;
    }
    else if (miles <= 20) {
        const fast10mileDansiAnimal = 10 * fast10milse;
        const restMile = miles - 10;
        const second10mileDansiAnimal = restMile * second10Milse;
        const fast10AndSecond10MileAnimal = fast10mileDansiAnimal + second10mileDansiAnimal;
        return fast10AndSecond10MileAnimal;
    }
    else {
        const declareFast10Mile = 10 * fast10milse;
        const declaresecond10Mile = 10 * second10Milse;
        const rest20Mile = miles - 20;
        const declareTird10Mile = rest20Mile * tird10Mile;
        const fastSecondTird = declareFast10Mile + declaresecond10Mile + declareTird10Mile;
        return fastSecondTird;

    }

}





const totalAnimals = countAnimal(30);
console.log(totalAnimals);