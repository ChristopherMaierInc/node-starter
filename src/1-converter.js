function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * .5556
}

function formatCelsius(a) {
  return (Math.round(a) + '°C')
}

function formatFahrenheit(a) {
  return (Math.round(a) + '°F')
}

let fahrenheit

let celsius

let weeklyTemps = [32, 15, 18, 22, 44, 16, 44]

// Monday

const mondayTemperature = 24
console.log(`On Monday it is ${ mondayTemperature }°C`)
fahrenheit = formatFahrenheit(convertCelsiusToFahrenheit(mondayTemperature))
console.log(`The Americans would think of that as ${ fahrenheit }`)

// Tuesday

const tuesdayTemperature = 31
console.log(`On Tuesday it is ${ tuesdayTemperature }°C`)
fahrenheit = formatFahrenheit(convertCelsiusToFahrenheit(tuesdayTemperature))
console.log(`The Americans would think of that as ${ fahrenheit }`)

// Wednesday

const wednesdayTemperature = 99
console.log(`On Wednesday it is ${ wednesdayTemperature }°F`)
celsius = formatCelsius(convertFahrenheitToCelsius(wednesdayTemperature))
console.log(`The Aussies would think of that as ${ celsius }`)

// Weekly temperatures

console.log(`This week's temperatures are going to be ${ weeklyTemps }`)
console.log(`and the highest temperature will be: ${ Math.max(...weeklyTemps) + '°' }`)

/*

Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of usage
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one

*/
