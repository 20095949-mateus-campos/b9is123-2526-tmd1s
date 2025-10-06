// ideally would be imported from a business rules script, but cannot be done without a server due to CORS violation. Solution was to link businessRules.js to the HTML directly.
// import {euler} from "./businessRules"

let listEuler4 = (a, l) => alert(`${euler(a, l)} : ${a.join(" ")} : ${l.join(" ")}`)
