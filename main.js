var input = document.querySelector('#input_id');
var button = document.querySelector('#btn_id');
var text = document.querySelector('#teksti_id');
var input1 = document.querySelector('#input1_id');
var input2 = document.querySelector('#input2_id')

// button.onclick= function(){
//     text.innerHTML = input.value;
// }

button.addEventListener('click', function(){
    text.innerHTML = input.value + " " + input1.value + " " + input2.value;
})


var text = "The best school in the world is Digital School!";
var result = text.search("Digital School!");
document.getElementById("result1").innerHTML = result;

var text = "The best school in the world is Digital School!";
var result = text.replace(/world/, "universe");
document.getElementById("result2").innerHTML = result;


var text = "abcdef";
var regex = new RegExp("abc");
document.getElementById("result4").innerHTML = regex.test(text);