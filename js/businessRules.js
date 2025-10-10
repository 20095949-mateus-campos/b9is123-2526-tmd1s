function parseInputs(inputs) {
    return inputs.map(input => input.value
        .replaceAll(" ", ",")
        .split(",")
        .map(x => parseInt(x)))
}

function euler(factors, multiples) {
    if (factors.some(isNaN) || multiples.some(isNaN)) {
        throw TypeError("Expected list of integers. Got NaN.")
    }

    if (!factors.length || !multiples.length) {
        throw RangeError("Expected list of integers. Got empty list.")
    }

    return factors
        .map(factor => multiples.filter(multiple => multiple % factor == 0))
        .flat()
        .reduce((sum, factor) => sum + factor, 0)
}

function prettyList(list) {
    return list.slice(0, list.length - 1).join(", ") + " and " + list[list.length - 1]
}

// ideally would be exported as modules, but cannot be done without a server due to CORS violation. Solution was to link businessRules.js to the HTML directly.
// export {parseInputs, euler, prettyList}
