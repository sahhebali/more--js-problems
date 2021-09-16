/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;
//     // wood calculation
//     const chairWoodQuantity = chairQuantity * perChairWood;
//     const tableWoodQuantity = tableQuantity * perTableWood;
//     const bedWoodQuantity = bedQuantity * perBedWood;
//     // adding all wood quantity
//     const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
//     return totalWood;
// }

// const firstOption = woodCalculator(1, 2, 3);
// console.log(firstOption);


function books(bigbooks, smallbook) {
    const bigBookPrice = 10;
    const smallBookPrice = 20;
    const bigBookQuantity = bigbooks * bigBookPrice;
    const smallbookQuantity = smallbook * smallBookPrice;
    const sumTotalBook = bigBookQuantity + smallbookQuantity;
    return sumTotalBook;
}

const totalBook = books(2, 2);
console.log(totalBook);