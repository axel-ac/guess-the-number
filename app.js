const number = Math.floor(Math.random() * 100) + 1;
//! input box
let inputData = document.getElementById("inputData")
let info = document.getElementById("info")
let firstNumber = document.getElementById("firstNumber")
let secondNumber = document.getElementById("secondNumber")
let life = 0
let chance = 5
info.innerHTML = `number of attempt: ${life} <br><br> You only have ${chance} chance