var numField1 = document.getElementById('num1');
var numField2 = document.getElementById('num2');
var resultField = document.getElementById('result');
var form = document.getElementById('XIsWhatPercentOfY');

form.addEventListener('submit', function(event) {
    if( !numField1.value || !numField2.value ) {
        alert("Please enter your value");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var result = x /y * 100;
        

        resultField.innerText = "Answer:" + result + "%";

        event.preventDefault();
    }
});