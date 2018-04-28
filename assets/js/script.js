$(".toggle-content").hide();

$(document).ready(function(){

    $(".toggle-header").click(function(){
    	var parent=$(this).closest('.toggle-item');
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

   $(".deck-enabler").click(function(){
    	var archetype=$(this).closest('.deck');
        $(this).toggleClass("activeDeck");
    	$(archetype).find(".codehs").slideToggle();
        $(".deck").not(archetype).find(".deck-enabler").removeClass("activeDeck");
    	$(".deck").not(archetype).find(".codehs").slideUp();
    });

   $(".notdone").click(function(){
        var that=$(this).closest(".version");
        $(this).toggleClass("done");
        $(".version").not(that).find(".btn").removeClass("done");
   });

});


/*  toggle-item = deck

    toggle-content = codehs

    toggle-header = deck-enabler*/