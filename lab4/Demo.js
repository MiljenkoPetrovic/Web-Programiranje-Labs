var i = 0;
function pozdrav(){
    var value = parseInt(document.getElementById(inc).value, 10)
    value = isNaN(value) ? 0 : value;
    value++;
    alert("Hello! You've clicked a button " + value + " time/times.");
    
}