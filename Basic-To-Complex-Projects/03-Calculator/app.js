let displayEl = document.getElementById("display");
let allBtns = document.querySelectorAll("button");
class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.currentValue = "0";
    this.operator = null;
    this.previousValue = "";
  }

  appendNumber(number) {
    if (this.currentValue === "0") {
      this.currentValue = number;
    } else {
      this.currentValue += number;
    }
  }

  updateDisplay() {
    this.displayElement.textContent = this.currentValue;
  }

  clear() {
    this.currentValue = "0";
    this.operator = null;
    this.previousValue = "";
    this.updateDisplay();
  }

  chooseOperator(operator) {
    this.previousValue = this.currentValue;
    this.operator = operator;
    this.currentValue = "0";
  }

  calculate() {
    let intPrevVal = parseFloat(this.previousValue);
    let intCurrVal = parseFloat(this.currentValue);
    switch (this.operator) {
      case "+":
        this.currentValue = String(intPrevVal + intCurrVal);
        break;
      case "-":
        this.currentValue = String(intPrevVal - intCurrVal);
        break;
      case "*":
        this.currentValue = String(intPrevVal * intCurrVal);
        break;
      case "/":
        this.currentValue = String(intPrevVal / intCurrVal);
        break;
    }
    this.operator = null;
    this.previousValue = "";
    this.updateDisplay();
  }
}

let calculatorClassObject = new Calculator(displayEl);

allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.dataset.action === "number") {
      calculatorClassObject.appendNumber(e.target.dataset.value);
      calculatorClassObject.updateDisplay();
    } else if (e.target.dataset.action === "operator") {
      calculatorClassObject.chooseOperator(e.target.dataset.value);
    } else if (e.target.dataset.action === "equals") {
      calculatorClassObject.calculate();
    } else if (e.target.dataset.action === "clear") {
      calculatorClassObject.clear();
    }
  });
});
