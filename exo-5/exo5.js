// you can write js here

console.log('exo-5');
let input = 'Turpentine and turtles'
let vowels = ['A', 'E', 'I', 'O', 'U']
let resultArray = []
for (let i = 0; i < input.length; i++) {

    let character = input[i].toUpperCase();
    if (vowels.indexOf(character)!== -1) {
        resultArray.push(character)
    }
}
let result = resultArray.join()
console.log(result)
console.log('only small metter ',resultArray)