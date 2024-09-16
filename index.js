let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

let savedStreak=localStorage.getItem("streak")
if(savedStreak){
    saveEl.textContent=savedStreak
} 

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    savedStreak=localStorage.setItem("streak",saveEl.textContent)
}
function retry(){
    saveEl.textContent= "Previous entries:"
    countEl.textContent = 0
    count = 0
    localStorage.removeItem("streak")
}
