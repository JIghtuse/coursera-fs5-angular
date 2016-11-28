var person = {
    name: "",
    type: "noone"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event) {
    calculateNumericOutput();
}

function calculateNumericOutput() {
    person.name = document.getElementById('name').value;

    var totalNameValue = 0;
    for (var i = 0; i < person.name.length; i++) {
        totalNameValue += person.name.charCodeAt(i);
    }

    var output = `Total Numeric value of person's name is ${totalNameValue}`;
    document.getElementById('output').innerText = output;
}
