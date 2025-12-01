let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.textContent;

        if (value === "C") {
            display.textContent = "";
        }
        else if (value === "=") {
            if (display.textContent !== "") {
                display.textContent = eval(display.textContent);
            }
        }
        else {
            display.textContent += value;
        }
    });
});
