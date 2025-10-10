// ideally would be imported from a business rules script, but cannot be done without a server due to CORS violation. Solution was to link businessRules.js to the HTML directly.
// import {parseInputs, euler, prettyList} from "./businessRules"

let listEuler1 = (a, b, l) => alert(`The sum of all the multiples of ${a} or ${b} in ${l.slice(0, l.length-1).join(", ") + " and " + l[l.length-1]} is ${euler([a, b], l)}.`)

let listEuler2 = (a, l) => {inputAEx3B.value = a; listEuler3(a, l)}

let listEuler3 = (a, l) => alert(`The sum of all the numbers in ${l.slice(0, l.length-1).join(", ") + " and " + l[l.length-1]} that are multiples of numbers in ${a.slice(0, a.length-1).join(", ") + " and " + a[a.length-1]} is ${euler(a, l)}.`)
