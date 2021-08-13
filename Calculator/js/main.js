//Write your pseduo code first!
document.querySelector('#zebra').addEventListener('click', convert)

function convert() {
  let numOne = document.querySelector('#theFirstNumber').value
  let numTwo = document.querySelector('#theSecondNumber').value
  let convertedValue = 0

if(document.getElementById('box1').selected){
  convertedValue = Number(numOne) + Number(numTwo)

}
else if (document.getElementById('box2').selected) {
  convertedValue = Number(numOne) - Number(numTwo)
}
else if (document.getElementById('box3').selected) {
  convertedValue = Number(numOne) * Number(numTwo)
}
else if (document.getElementById('box4').selected) {
  convertedValue = Number(numOne) / Number(numTwo)
}

  document.querySelector('#talkThatTalk').innerText = convertedValue
}
