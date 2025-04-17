let firstNum = undefined;
let secondNum = undefined;
let result = undefined;
let mathAction = undefined;


function getNumber(event){
  let el = event.target
  let value =el.value
  if (el.id === 'num1' ) {
    firstNum = value 
    console.log(`first number is ${firstNum}`)
  } else if (el.id === 'num2' ) {
    secondNum = value
    console.log(`second number is ${secondNum}`)
  } else {
    console.log("eror getNumber")
  }
  
}


let mathActionButtons = document.querySelectorAll(".operator");

[...mathActionButtons].forEach(element => {
  element.addEventListener("click", setMathAction)
})


function setMathAction(event){
  let el = event.target;
  mathAction = el.id;
  console.log(mathAction)
}
// console.log(mathActionButtons)
// console.log([...mathActionButtons])
1. повесить вызов функции на кнопку result 
2. написать функцию mathresult 
2.1 изпользывать в функции mathresult как аргументы firstNum,secondNum,mathAction. Написать действие с помощью ifElse 
if (mathAction === "plus"){
  result = firstNum + secondNum
}
else if ...
3. написать функцию которая будет сетить значения в поле результата (innerHTML или el.value)