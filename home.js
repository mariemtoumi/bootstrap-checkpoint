$(".h").mouseover(
    function(){
    $(this).css("opacity","0.5");
})
$(".h").mouseleave(
    function(){
    $(this).css("opacity","1");
})
$(document).ready(function () {
    $("#myModal").modal("show").on('shown.bs.modal', function () {
        $(".modal").css('display', 'block');
    })
});

