jQuery(function($){
	
		if(cur_page_data.pageid == 1){
			$('.header_upper_row').css('width','90%');	
		}
	
		var $window = $(window),
		$body = $('body');	
			
		//////////////////
		$body.prepend(`<div class="preloader">
						<div class="sk-spinner sk-spinner-rotating-plane"></div>
					 </div>`);
		
		// preloader
		$(window).load(function(){
			$('.preloader').fadeOut(2000); // set duration in brackets    
		});
	
		$('.divider_col, .feature1_img, .feature1_text, .contact_text, .contact_form').addClass('wow fadeInUp');
		
		///////////
		$('.header_mid_row h1, .header_mid_row p, .banner_img img, .businessplan').addClass('wow fadeIn');
		
		///////////
		$('.sharebtnanim1, .sharebtnanim2, .sharebtnanim3, .sharebtnanim4, .pricing_heading h2').addClass('wow bounceIn');
		
		///////////
		$('.feature_text, .download_text').addClass('wow fadeInLeft');
		
		/////////////
		$('.feature_img, .download_img').addClass('wow fadeInRight');
		
		/////////////
		$('').attr('data-wow-delay','0.2s');
		$('.header_mid_row h1, .header_mid_row p, .banner_img img, .businessplan').attr('data-wow-delay','0.4s');
		$('.divider_col, .feature1_img, .feature1_text, .feature_text, .feature_img, .download_text, .download_img, .contact_text, .contact_form').attr('data-wow-delay','0.4s');
		$('.sharebtnanim1').attr('data-wow-delay','0.8s');
		$('.sharebtnanim2').attr('data-wow-delay','1s');
		$('.sharebtnanim3').attr('data-wow-delay','1.2s');
		$('.sharebtnanim4').attr('data-wow-delay','1.4s');
		
		$(document).ready(function() {
			
			if(cur_page_data.pageid == 1 || cur_page_data.pagename == "home"){
				$('.header_content').css('padding','7% 0');		
			}
			else{
				$('.header_img').css('display','none');
			}
			
		}); 

		// SCROLLTO THE TOP
		// Show or hide the sticky footer button
		$window.scroll(function() {
			if ($(this).scrollTop() > 200) {
				$('.to_top').fadeIn(200);
			}else{
				$('.to_top').fadeOut(200);
				}
		});		
		
		// Animate the scroll to top
		$('.to_top').click(function(event) {
			event.preventDefault();
		
			$('html, body').animate({scrollTop: 0}, 300);
		});
		/////////////
		
		 /* wow
		-------------------------------*/
		new WOW({ mobile: false }).init();
		
});
