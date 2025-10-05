function checkWeight() {
    if (parseInt(inputBaggageWeight.value) <= parseInt(inputMaxWeight.value)) {
        
        alert(`Maximum weight: ${inputMaxWeight.value} kg.\nBaggage weight: ${inputBaggageWeight.value} kg.\n\nYou may proceed.`)

        divRemove.hidden = true
        inputRemoveWeight.value = ''
        toggleButton()

    } else {

        alert(`Maximum weight: ${inputMaxWeight.value} kg.\nBaggage weight: ${inputBaggageWeight.value} kg.\n\nPlease, remove some weight and recheck.`)
        
        divRemove.hidden = false
    }
}

function removeWeight() {
    let newWeight = parseInt(inputBaggageWeight.value) - parseInt(inputRemoveWeight.value)
    
    if (newWeight < 0) newWeight = 0
    
    inputBaggageWeight.value = newWeight
}

function toggleButton() {
    if (inputMaxWeight.value != "" && inputBaggageWeight.value != "") {
        buttonCheckWeight.disabled = false
        if (!divRemove.hidden && inputRemoveWeight.value != "")
            buttonRemoveWeight.disabled = false
        else
            buttonRemoveWeight.disabled = true
    } else {
        buttonCheckWeight.disabled = true
        buttonRemoveWeight.disabled = true
    }
}

function resetScale() {
    inputMaxWeight.value = ''
    inputBaggageWeight.value = ''
    inputRemoveWeight.value = ''

    buttonCheckWeight.disabled = true
    buttonRemoveWeight.disabled = true
    
    divRemove.hidden = true
}
