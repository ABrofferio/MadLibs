$(document).ready(function() {
    $("#madOdyssey").hide();
    $("#offOdyssey").hide();
});
//const color_1 = document.getElementById('color1');
//const magical = document.getElementById('magic');

$('#rewrite').click(()=>{
    $('#madOdyssey').show();
    $('#originalOdyssey').hide();
});

$('#officialButton').click(()=>{
    $('#offOdyssey').show();
    $('#madOdyssey').hide();
    $('#verb1official').html($('#verb1').val());
    $('#noun1official').html($('#noun1').val());
    $('#adjective1official').html($('#adjective1').val());
    $('#adjective2official').html($('#adjective2').val());
    $('#verb2official').html($('#verb2').val());
    $('#adjective3official').html($('#adjective3').val());
    $('#verb3official').html($('#verb3').val());
    $('#color1official').html($('#color1').val());
    $('#adjective4official').html($('#adjective4').val());
});

$('#back').click(()=>{
    $('#originalOdyssey').show();
    $('#offOdyssey').hide();
});
//for every id in input tag push to array of changed words and 
//then iterate through array concatenate official to their id name and insert the value of the input id to the innerhtml of official id
