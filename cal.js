let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(function(element) {
    element.addEventListener('click', function(e) {
        let buttonText = e.target.innerText;
        
        if (buttonText === '=') {
            try {
                let expression = string.replace(/×/g, '*').replace(/÷/g, '/');
                string = String(eval(expression));
                inputBox.value = string;
            } catch (error) {
                inputBox.value = "Error";
                string = "";
            }
        } else if (buttonText === 'AC') {
            string = "";
            inputBox.value = "0";
        } else if (buttonText === 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string || "0";
        } else if (e.target.id === 'plusMinus') {
            try {
                if (string) {
                    string = String(-eval(string));
                    inputBox.value = string;
                }
            } catch (error) {
                inputBox.value = "Error";
                string = "";
            }
        } else {
            if (inputBox.value === "0" || inputBox.value === "Error") {
                string = buttonText;
            } else {
                string += buttonText;
            }
            inputBox.value = string;
        }
    });
});

inputBox.value = "0";