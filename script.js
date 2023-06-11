function appendToInput(value) {
    var input = document.getElementById("input");
    input.value += value;
}

function calculate() {
    var input = document.getElementById("input");
    var expression = input.value;
    
    try {
        var result = eval(expression);
        input.value = result;
    } catch (error) {
        document.getElementById("result").innerHTML = "Błąd: " + error;
    }
}

function clearInput() {
    var input = document.getElementById("input");
    input.value = "";
}

document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("input");

    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            calculate();
        }
    });
});


window.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('input');
    input.focus();
});
