let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    // Created a variable that contains both the count and the dash separator.
    saveEl.textContent += countStr
        // Rendered the variable in the saveEl using innerText
        //updated the innerText with textContent

    console.log(count)
}


