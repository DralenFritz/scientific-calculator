console.log("Document is ready")
const display = document.getElementById("calc-display");
const buttons = document.getElementsByClassName('btn');
console.log(buttons);

let currentValue = "";

function evaluateResult() {
    const convertedValue = currentValue
        .replaceAll('×','*')
        .replaceAll('÷','/')
        .replaceAll('%', '*0.01');
    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
}

for (const button of buttons) {
    button.addEventListener("click", () => {
        const value = button.innerHTML;

        if (value === "AC") {
            currentValue = "";
            display.value = currentValue;
        } else if (value === "=") {
            currentValue.replaceAll('÷','/');
            currentValue.replaceAll('×','*');
            evaluateResult();
        } else {
            currentValue += value;
            display.value = currentValue;
        }

    })
}
