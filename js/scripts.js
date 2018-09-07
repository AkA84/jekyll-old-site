$(document).ready(function() {
	
        $('#menu_container li').hover(
            function () {
                $('ul:first', this).css('display','block');
     
            }, 
            function () {
                $('ul:first', this).css('display','none');         
            }
        );               		
	    
	    
	$('.home_featured_box').hover(
		function() {
			$(this).find('.home_featured_title').css('display','block');
		},
		function() {
			$(this).find('.home_featured_title').css('display','none');
		}
	);
	
});