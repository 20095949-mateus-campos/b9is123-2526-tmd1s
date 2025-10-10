// ideally would be imported from a business rules script, but cannot be done without a server due to CORS violation. Solution was to link businessRules.js to the HTML directly.
// import {parseInputs, euler, prettyList} from "./businessRules"

function euler2a(a = 3, b = 5, n = 1000) {
    
    /*
    procedural version (original attempt):
    
    let sum = 0
    for (let i = 1; i < n; i++) {
        if (i % a == 0 || i % b == 0) {
            sum += i
        }
    }
    alert(`The sum of all the multiples of ${a} or ${b} below ${n} is ${sum}.`)
}

let eulerCustom = (a, b, n) => euler1(a, b, n)
