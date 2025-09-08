console.log("Document is ready")
const display = document.getElementById("calc-display");
const buttons = document.getElementsByClassName('btn');
console.log(buttons);

let currentValue = "";

function evaluateResult() {
    const convertedValue = currentValue
        .replaceAll('×','*')
        .replaceAll('÷','/')
        .replaceAll('%', '*0.01')
        .replaceAll('sin','Math.sin')
        .replaceAll('cos','Math.cos')
        .replaceAll('ln','Math.log')
        .replaceAll('π','Math.PI')
        .replaceAll('log', 'Math.log10')
        .replaceAll('e', 'Math.E')
        .replaceAll('tan', 'Math.tan')
        .replaceAll('√','Math.sqrt');

    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
}

for (const button of buttons) {
    button.addEventListener("click", () => {
        const value = button.innerHTML;

        try {
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
        } catch(err) {
            console.error(err);
            currentValue = "ERROR";
            display.value = currentValue;
        }

        

    })
}
