function formatVanityPlate(string) {
  let words = string.split(' ')
  console.log(words)
  words = words.map(word => word.toUpperCase())
  words = words.replace(/'for'/gi, '4')
  words = words.replace(/'to'/gi, '2')
  return words.join('')
}
//
// function replaceFor {
//   str.replace("for","4")
// }

const one = 'I like money'
console.log(`Number plate: ${ formatVanityPlate(one) }`)

const two = 'Cats for life'
console.log(`Number plate: ${ formatVanityPlate(two) }`)

const three = 'I am late'
console.log(`Number plate: ${ formatVanityPlate(three) }`)


/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/
