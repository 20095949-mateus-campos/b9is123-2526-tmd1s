// ideally would be imported from a business rules script, but cannot be done without a server due to CORS violation. Solution was to link businessRules.js to the HTML directly.
// import {parseInputs, euler, prettyList} from "./businessRules"

function euler5a(a, l) {
    [a, l] = parseInputs([a, l])
    
    try {
        alert(`${euler(a, l)} : ${a.join(" ")} : ${l.join(" ")}`)
    } catch(e) {
        if (e instanceof TypeError)
            alert(`corrupt : ${a.some(isNaN) ? "NaN" : a.join(" ")} : ${l.some(isNaN) ? "NaN" : l.join(" ")}`)
        else
            alert(`An unknown error occurred.`)
    }    
}

function euler5b(a, l, r = false) {
    if (!r) [a, l] = parseInputs([a, l])
    
    try {
        alert(`${euler(a, l)} : ${a.join(" ")} : ${l.join(" ")}`)
    } catch(e) {
        switch(true) {
            case e instanceof TypeError:
                a = a.filter(x => !isNaN(x))
                l = l.filter(x => !isNaN(x))
                euler5b(a, l, true)
                break
            case e instanceof RangeError:
                alert(`corrupt : ${a.length ? a.join(" ") : "empty"} : ${l.length ? l.join(" ") : "empty"}`)
                break
            default:
                alert(`An unknown error occurred.`)
        }
    }    
}
