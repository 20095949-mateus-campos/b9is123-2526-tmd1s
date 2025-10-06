function euler(factors, multiples) {
    return factors.
            map(factor => multiples.filter(multiple => multiple % factor == 0)).
            flat().
            reduce((sum, factor) => sum + factor, 0)
}

// ideally would be exported as modules, but cannot be done without a server due to CORS violation. Solution was to link businessRules.js to the HTML directly.
// export {euler}
