// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop()
console.log(secretMessage)
secretMessage.push('to', 'program')
console.log(secretMessage);
const indexOfEasily = secretMessage.indexOf("easily")
secretMessage[indexOfEasily] = 'right'
console.log(indexOfEasily);
console.log(secretMessage);
secretMessage.shift()
console.log(secretMessage);
secretMessage.unshift("Programming")
console.log(secretMessage);
const indexOfGet = secretMessage.indexOf("get")
secretMessage[indexOfGet] = 'know'
const indexOfRight = secretMessage.indexOf("right")
secretMessage[indexOfRight] = 'know'
const indexOfThe = secretMessage.indexOf("the")
secretMessage[indexOfThe] = 'know'
const indexOfFirst = secretMessage.indexOf("first")
secretMessage[indexOfFirst] = 'know'
const indexOfTime = secretMessage.indexOf("time")
secretMessage[indexOfTime] = 'know'
console.log(secretMessage.join())