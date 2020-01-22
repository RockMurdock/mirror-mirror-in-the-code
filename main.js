let inputEL = document.getElementById("message")

let outputElBlue = document.getElementById("blue-box")

let outputElRed = document.getElementById("red-box")


inputEL.addEventListener("keyup", function (event){
    outputElBlue.textContent = event.target.value 
    outputElRed.textContent = event.target.value
})