let countLog = document.getElementById("count-log") // pass in arguments

console.log()

let count = 0

function increment() {
    count = count + 1
    countLog.innerText = count
}

function save() {
    console.log(count)
}
