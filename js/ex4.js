// ideally would be imported from a business rules script, but cannot be done without a server due to CORS violation. Solution was to link businessRules.js to the HTML directly.
// import {parseInputs, euler, prettyList} from "./businessRules"

function euler4a(a, l) {
    [a, l] = parseInputs([a, l])

    alert(`${euler(a, l)} : ${a.join(" ")} : ${l.join(" ")}`)
}
