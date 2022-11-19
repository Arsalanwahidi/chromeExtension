var num1 = 0;
var num2 = 0;

document.getElementById('num1').addEventListener('change', function () {
    num1 = parseInt(document.getElementById('num1').value);
})

document.getElementById('num2').addEventListener('change', function () {
    num2 = parseInt(document.getElementById('num2').value);
})


function add(a, b) {
    document.getElementById('display').innerHTML = a + b;
}

document.getElementById('add').addEventListener('click', function () {
    add(num1, num2);
})

console.log(`number: ${num1}`)
