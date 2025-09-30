function checkBaggageWeight(weight) {
    switch(true) {
        case isNaN(weight):
            document.getElementById("message").textContent = `Something went wrong. Please, try again.`
            break
        case weight > 15:
            document.getElementById("message").textContent = `Baggage weight is ${weight} kg. Please, remove some weight.`
            document.getElementById("remove").removeAttribute("hidden")
            break
        default:
            document.getElementById("message").textContent = `Baggage weight is ${weight} kg. All clear.`
    }
}

function removeSomeWeight(weight) {
    switch(true) {
        case isNaN(weight):
            document.getElementById("message").textContent = `Something went wrong. Please, try again.`
            break
        default:
            let newWeight = document.getElementById("baggageWeight").value - weight           
            if (newWeight < 0) newWeight = 0
            document.getElementById("baggageWeight").value = newWeight
            checkBaggageWeight(newWeight)
    }
}
