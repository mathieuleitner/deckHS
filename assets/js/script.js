$(".toggle-content").hide();

$(document).ready(function(){

    $(".toggle-header").click(function(){
    	var parent=$(this).closest('.toggle-item');
    	/*$(".welcome").addClass("hide");*/
    	$(this).toggleClass("activeColor");
        $(parent).find(".toggle-content").slideToggle(); 
        $(".toggle-item").not(parent).find(".toggle-content").slideUp();
        $(".toggle-item").not(parent).find(".toggle-header").removeClass("activeColor");
         
          if($(".toggle-header").hasClass("activeColor")){
			$(".welcome").addClass("hide");
			} else {
				$(".welcome").removeClass("hide");
			}
    });

   $(".deck").click(function(){
    	var archetype=$(this).closest('.deck');
    	$(archetype).find(".codehs").slideToggle();
    	$(".deck").not(archetype).find(".codehs").slideUp();
    	$(this).toggleClass("activeDeck");
    	$(".deck").not(archetype).removeClass("activeDeck");
    });

});


