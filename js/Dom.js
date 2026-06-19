function result(){
let inputvalue = document.getElementById('inputdata').value;



let displayheading = document.getElementById('text');

displayheading.innerHTML= inputvalue;

displayheading.style.color="red"

document.getElementsByTagName('body')[0].style.backgroundColor="green";


}
let parabkg=document.getElementById('para');
function colorchange(){
    parabkg.style.backgroundColor="#"+(Math.random() * 0xFFFFFF << 0).toString(16);
}
parabkg.addEventListener('mouseout',colorchange)