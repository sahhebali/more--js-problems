// const greetings = 'Saheb, how are you?';

// function reverseString(text) {
//     let reverse = '';
//     for (const letter of text) {
//         reverse = letter + reverse;
//     }
// }
// const reversed = reverseString(greetings);
// console.log(reversed);

// const frindsAge = ['10', '20', '30', '40', '40'];
// function reversAge(age) {
//     let reversFrindsAge = '';
//     for (const ageNumber of age) {
//         console.log(ageNumber);
//         reversFrindsAge = ageNumber + reversFrindsAge;
//     }
//     return reversFrindsAge;
// }
// const reverse = reversAge(frindsAge);
// console.log(reverse);


const returnJurney = 'ataklok ot dabardyh';
function reverse(jurney) {
    let comeToReturn = '';
    for (let i = 0; i < jurney.length; i++) {
        // console.log(commingKolkata);
        comeToReturn = jurney[i] + comeToReturn;
    }
    return comeToReturn;
}

const finalyreturn = reverse(returnJurney);
console.log(finalyreturn);
// const greetings = 'Saheb, how are you?';

// function reverseString(text) {
//     let reverse = '';
//     for (const letter of text) {
//         // console.log(letter);
//         reverse = letter + reverse;

//     }
//     return reverse;
// }

// const reversed = reverseString(greetings);
// console.log(reversed);
