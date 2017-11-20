function formatVanityPlate(string) {
  let words = string.split(' ')
  words = words.map(word => word.toUpperCase())
  return words.join('')
}

function replacePlateBling(string) {
  return string.replace('for', '4').replace('too', 'to').replace('to', '2').replace('you', 'u').replace('money', '$').replace('see', 'c')
}

function maximumPlate(string) {
  if (string.length > 12) {
    return string.substring(0, 12)
  }
    return string
}

function completePlateFormat(string) {
  return formatVanityPlate(maximumPlate(replacePlateBling(string)))
}

const one = 'I like money'
console.log(`Number plate: ${ completePlateFormat(one) }`)

const two = 'Cats for life'
console.log(`Number plate: ${ completePlateFormat(two) }`)

const three = 'I am late'
console.log(`Number plate: ${ completePlateFormat(three) }`)

const four = 'you cant see me'
console.log(`Number plate: ${ completePlateFormat(four) }`)

/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/
