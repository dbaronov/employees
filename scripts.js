	//  scrollToTop function
	
	jQuery(function(){
 
	    jQuery(document).on( 'scroll', function(){
 
	        if (jQuery(window).scrollTop() > 70) {
	            jQuery('.scroll-top-wrapper').addClass('show');
                
	        } else {
	            jQuery('.scroll-top-wrapper').removeClass('show');
	        }
            
	    });
 
	    jQuery('.scroll-top-wrapper').on('click', scrollToTop);
	});
 
	function scrollToTop() {
	    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	    element = jQuery('body');
	    offset = element.offset();
	    offsetTop = offset.top;
	    jQuery('html, body').animate({scrollTop: offsetTop}, 1500, 'easeInOutCirc');
	}

    /* Sticky JS */

    jQuery(document).ready(function(){
        ww = jQuery(window).width();
        if(ww > 767) {
            jQuery("#sticker").sticky({topSpacing:0});
            
            jQuery(document).on( 'scroll', function(){

                if (jQuery(window).scrollTop() > 70) {
                    jQuery('.scroll-logo').show('slow');

                } else {
                    jQuery('.scroll-logo').hide('slow');
                }

            });
        
        }
        
    });