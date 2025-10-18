class PrintSelector extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({mode: "closed"})

        // inject the component's HTML into the shadow DOM
        shadow.innerHTML =
            this.getSelection(["header", "section", "article", "footer"]) // relevant sections only
                .map(section => {
                    return (
                        `<input type="checkbox" id="section-${section.id}">` +
                        (section.tagName.toLowerCase() == "article" ? "&#8627;" : "") + // insert a ↳ before 2nd-level sections
                        `<label for="section-${section.id}">${section.title}</label><br>`
                    )
                }).join("") +
            `<br>
            <button id="select-all">Select All</button>
            <button id="unselect-all">Unselect All</button>
            <button id="print-selection-button">${this.textContent}</button>`

        // button to select all sections at once
        const buttonSelectAll = shadow.getElementById("select-all")
        buttonSelectAll.addEventListener("click", () => this.selectAll(shadow.querySelectorAll("input")))

        // button to unselect all sections at once
        const buttonUnselectAll = shadow.getElementById("unselect-all")
        buttonUnselectAll.addEventListener("click", () => this.selectAll(shadow.querySelectorAll("input"), true))
        
        // button to print selected sections
        const buttonPrintSelection = shadow.getElementById("print-selection-button")
        buttonPrintSelection.addEventListener("click", () => this.printSelection(shadow.querySelectorAll("input")))

        // isolate the sections that are exercises
        const inputExercises = Array.from(shadow.querySelectorAll("input")).filter(input => input.id.startsWith("section-exercise"))
        
        // if main title Exercises is (un)selected, (un)select all individual exercises automatically
        inputExercises[0].addEventListener("change", event => inputExercises.slice(1).forEach(exercise => exercise.checked = event.target.checked))

        // if at least one individual exercise is selected, select main title Exercises
        // if no individual exercises are selected, unselect main title Exercises
        inputExercises.slice(1).map(exercise => exercise.addEventListener("change", event =>{
            if (event.target.checked)
                inputExercises[0].checked = true
            else if (inputExercises.slice(1).every(exercise => !exercise.checked))
                inputExercises[0].checked = false
        }))
    }

    // query all relevant sections but ignore scripts
    getSelection(elementTypes) {
        return Array.from(document.querySelectorAll(elementTypes)).filter(el => el.id !== "scripts")
    }

    // select/unselect all entries
    selectAll(inputs, uncheck = false) {
        Array.from(inputs).forEach(input => input.checked = !uncheck)
    }

    // print selected entries
    printSelection(inputs) {
        inputs = Array.from(inputs)

        const selection = inputs.filter(input => input.checked) // only checked entries

        if (!selection.length) return print() // if no entry was selected print everything
        
        for (let i = 0; i < 2; i++) { // loop twice: 1st to hide and 2nd to unhide
            if (i == 1) print() // print once only between loops

            inputs.filter(input => !selection.includes(input)).forEach(entry => {
                let reference = entry.id.slice("section-".length)
                
                // (un)hide entire sections
                document.getElementById(reference).toggleAttribute("hidden")

                // (un)hide links to sections that have been (un)hidden
                Array.from(document.querySelectorAll("a")).forEach(a => {
                    if (a.href.split("#")[1] == reference) {
                        a.parentElement.toggleAttribute("hidden")
                    }
                })
            })
        }
    }
}

customElements.define("print-selector", PrintSelector)
