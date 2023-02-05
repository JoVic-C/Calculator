const valuePreviuosText = document.querySelector(".value-previuos");
const valueCurrentText = document.querySelector(".value-current");
const buttons = document.querySelectorAll(".buttons-container button");

class Calculator {
  constructor(valuePreviuosText, valueCurrentText) {
    this.valuePreviuosText = valuePreviuosText;
    this.valueCurrentText = valueCurrentText;
    this.currentOperation = "";
  }


}

const calc = new Calculator(valuePreviuosText, valueCurrentText);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const btnText = button.innerText;
    
    if (btnText === "=") {
      valuePreviuosText.innerText = valueCurrentText.innerText;
      valueCurrentText.innerText = eval(valueCurrentText.innerText);
      result = valueCurrentText.innerText;
    } else if (btnText === "C") {
        valueCurrentText.innerText = "";
        valuePreviuosText.innerText = "";
        
    } 
    else if(btnText === "CE"){
        valueCurrentText.innerText = "";
    }
    else if (btnText === "DEL") {
        valueCurrentText.innerText = "";
        valueCurrentText.innerText.slice(0, -1);
        
    } 
    else {
      valueCurrentText.innerText += btnText;
    }
  });
});
