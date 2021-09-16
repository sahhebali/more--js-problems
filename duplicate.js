// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

// function removeDuplicate(names) {
//     const unique = [];
// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     // console.log(element);
// }
//     for (const element of names) {
//         if (unique.indexOf(element) == -1) {
//             unique.push(element);
//         }
//     }
//     return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);






const names = ['rohim', 'korim', 'saheb', 'rohim', 'arif', 'sadik', 'arif', 'sojib', ' selim', 'korim', 'sadik'];
function duplicateName(name) {
    const newName = [];
    // for (let i = 0; i < names.length; i++) {
    //     const eliment = names[i];
    //     console.log(eliment);
    // }
    for (const find of names) {
        if (newName.indexOf(find) == -1) {
            newName.push(find);
        }
    }
    return newName;
}
const uniqueNames = duplicateName(names);

// console.log(uniqueNames);
const findCorrectManu = ['abcd', 'efgh', 'ijkl', 'mnop', 'abcd', 'efgh'];
function correctAbcd(abcd) {
    let perfectabcd = [];
    for (const rightAbcd of findCorrectManu) {
        if (perfectabcd.indexOf(rightAbcd) == -1) {
            perfectabcd.push(rightAbcd);
        }
    }
    return perfectabcd;
}

const finalAns = correctAbcd(findCorrectManu);
console.log(finalAns);
