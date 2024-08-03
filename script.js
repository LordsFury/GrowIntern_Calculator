let boxes = document.querySelectorAll(".box");
let exp = document.getElementById("txt");
let equal = document.querySelector(".equal");
let del = document.querySelector(".del");
let ac = document.querySelector(".ac");
let expression = "";

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        setExp(box);


    });
})

function setExp(box) {
    let length = expression.length;
    if ((box.innerText == "+" || box.innerText == "*" || box.innerText == "/" || box.innerText == "%") && (expression == "")) {
        expression = "";
    }
    else if ((box.innerText == "+" || box.innerText == "*" || box.innerText == "/" || box.innerText == "%") && (expression == "-")) {
        expression = "";
        exp.innerText = "0";
    }
    else if (box.innerText == "-" && expression == "-") {
        expression = box.innerText;
        exp.innerText = expression;
    }
    else if ((expression.charAt(length - 1) == "+" || expression.charAt(length - 1) == "-" || expression.charAt(length - 1) == "*" || expression.charAt(length - 1) == "/") && (box.innerText == "+" || box.innerText == "-" || box.innerText == "*" || box.innerText == "/" || box.innerText == "%")) {
        expression = expression.slice(0, length - 1);
        expression += box.innerText;
        exp.innerText = expression;
    }
    else if (box.innerText == "0" && exp.innerText == "0") {
        expression = "";
        exp.innerText = "0";
    }
    else if (box.innerText == ".") {
        let op = ["+", "-", "/", "*", "%"];
        let newindex = 0;
        let index = -1;
        for (let i = 0; i < 4; i++) {
            index = expression.indexOf(op[i]);
            if (index != -1) {
                newindex = index;
            }
        }
        console.log(newindex);
        if (!expression.includes(box.innerText)) {
            expression += box.innerText;
            exp.innerText = expression;
        }
        else if (!expression.includes(box.innerText, newindex)) {
            expression += box.innerText;
            exp.innerText = expression;
        }
    }
    else if (box.innerText == "=") {
        let result = String(eval(expression));
        expression = result;
        exp.innerText = expression;
    }
    else if (box.innerText == "AC") {
        expression = "";
        exp.innerText = "0";
    }
    else if (box.innerText == "DEL") {
        if (exp.innerText != "0") {
            expression = expression.slice(0, length - 1);
            exp.innerText = expression;
        }
        if (exp.innerText == "") {
            exp.innerText = "0";
        }
    }
    else {
        if (exp.innerText == "0") {
            exp.innerText = "";
        }
        expression += box.innerText;
        exp.innerText = expression;
    }
}