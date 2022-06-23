
var num1 = parseInt(prompt("Number 1:"))
var oper = prompt("Arithmetic operator: +, -, *, /,")
var num2 = parseInt(prompt("Number 2:"))

if (oper === "+") {
    document.write(num1 + num2)
}

else if (oper === "-") {
    document.write(num1 - num2)
}

else if (oper === "*") {
    document.write(num1 * num2)
}

else if (oper === "/") {
    document.write (num1 / num2)
}