// ideally would be imported from a business rules script, but cannot be done without a server due to CORS violation. Solution was to link businessRules.js to the HTML directly.
// import {parseInputs, euler, prettyList} from "./businessRules"

function euler3a(a, b, l) {
    [a, b, l] = parseInputs([a, b, l])

    alert(`The sum of all the multiples of ${a} or ${b} in ${prettyList(l)} is ${euler([a, b], l)}.`)
}

function euler3b(a, l) {
    [a2, l] = parseInputs([a, l])

    a2 = a2.slice(0, 2)
    a.value = a2

    alert(`The sum of all the numbers in ${prettyList(l)} that are multiples of numbers in ${prettyList(a2)} is ${euler(a2, l)}.`)
}

function euler3c(a, l) {
    [a, l] = parseInputs([a, l])

    alert(`The sum of all the numbers in ${prettyList(l)} that are multiples of numbers in ${prettyList(a)} is ${euler(a, l)}.`)
}
