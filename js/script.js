$(document).ready(function() {
    $(".mad").hide();
    $(".official").hide();
});
const color_1 = document.getElementById('color1');
const magical = document.getElementById('magic');

$('#rewrite').click(()=>{
    $('#madOdyssey').show();
    $('#originalOdyssey').hide();
});

$('#officialButton').click(()=>{
    $('#offOdyssey').show();
    $('#madOdyssey').hide();
});

$('#back').click(()=>{
    $('#originalOdyssey').show();
    $('#offOdyssey').hide();
});
color_1.addEventListener('mouseenter', ()=>{
    magical.style.color= color_1.value;
});