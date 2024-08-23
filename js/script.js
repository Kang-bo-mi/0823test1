$(".m_menu").hide();
$(".m_btn").click(function(){
    $(".m_menu").slideToggle()

    
})


$(".m_sub1").hide();
$(".m_menu").click(function(){
    $(".m_sub1").slideToggle()

    
})

$(".m_sub2").hide();
$(".m_menu2").click(function(){
    $(".m_sub2").slideToggle()

    
})





    
$(".sub").hide();
$(".menu>li").mouseover(function(){
    $(this).children(".sub").stop().fadeIn()
    
    })
    
    $(".menu>li").mouseout(function(){
        $(this).children(".sub").stop().fadeOut()
    })

        






   

    













