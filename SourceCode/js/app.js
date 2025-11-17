const $ = document

const inputElem = $.querySelector("#input-field")
const btnSaveElem = $.querySelector("#btn-save")
const btnDeleteElem = $.querySelector("#btn-delete")
const notesContainer = $.querySelector("#listed")
const colorsBox = $.querySelectorAll(".color-box")

colorsBox.forEach(function (colorBox) {
    colorBox.addEventListener("click", function (event) {
        let mainColor = event.target.style.backgroundColor
        inputElem.style.backgroundColor = mainColor
    })
})

btnDeleteElem.addEventListener("click", function () {
    inputElem.value = ""
    inputElem.style.backgroundColor = "#ffff"
})

function removeNote(event) {
    event.target.parentElement.remove()
}

function generateNewNote() {
    if (inputElem.value.trim()) {
        let newNoteDivElem = $.createElement("div")
        newNoteDivElem.className = "card shadow-sm rounded"
        let inputBg = inputElem.style.backgroundColor
        newNoteDivElem.style.backgroundColor = inputBg
        newNoteDivElem.addEventListener("click", removeNote)

        let newNotePElem = $.createElement("p")
        newNotePElem.className = "card-text p-3"
        newNotePElem.innerHTML = inputElem.value

        newNoteDivElem.append(newNotePElem)
        notesContainer.append(newNoteDivElem)

        inputElem.value = ""
        inputElem.style.backgroundColor = "#fff"
    }
}

inputElem.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        generateNewNote()
    }
})

btnSaveElem.addEventListener("click", function () {
    generateNewNote()
})

