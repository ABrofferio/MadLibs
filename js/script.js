$(document).ready(function() {
    $(".mad").hide();
});
const color_1 = document.getElementById('color1');
const magical = document.getElementById('magic');

$('#rewrite').click(()=>{
    $('#madOdyssey').show();
    $('#originalOdyssey').hide();
});

color_1.addEventListener('mouseenter', ()=>{
    magical.style.color= color_1.value;
});