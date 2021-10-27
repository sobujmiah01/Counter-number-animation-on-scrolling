var section = document.querySelector(".numbers");
var hasEntered =false;
window.addEventListener('scroll', (e)=>{
    var shouldanimate =(window.scrollY + window.innerHeight) >= section.offsetTop;
    if(shouldanimate && !hasEntered){
        hasEntered = true;
        $('.value').each(function(){
            $(this).prop('counter',0).animate({Counter:$(this).text()},{
                duration:4000,
                easing:'swing',
                step:function(now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});
