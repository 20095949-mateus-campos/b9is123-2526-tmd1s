function checkBaggageWeight(baggageWeight) {
    switch(true) {
        case isNaN(baggageWeight):
            alert(`Something went wrong. Please, try inputing the baggage weight again.`)
            break
        case baggageWeight > 15:
            alert(`Baggage weight is ${baggageWeight} kg and must be checked!`)
            break
        default:
            alert(`Baggage weight is ${baggageWeight} kg. All clear!`)
    }
}
