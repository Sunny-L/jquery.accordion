/*
 *	Created by Sunny-L on 2015/9/01
 *	GitHub:https://github.com/Sunny-L/jquery.accordion.git
*/

;(function($){
	$.fn.extend({
		accordion:function(options){
			var options = $.extend({
		        currentWidth:800,
		        otherWidth:100,
				itemDefautWidth:200,
        		speed:500
			},options);
      var self = this;
      var accordionItems = $(this).find('ul li');
      var hoverTimer,outTimer;
      $(self).find('ul li').hover(
        function(){
					$(this).stop().animate({width:options.currentWidth+'px'},options.speed).siblings().stop().animate({width:options.otherWidth+'px','background-position':'0'},options.speed)
        },function(){
					$(accordionItems).stop().animate({width:options.itemDefautWidth+'px'},options.speed).css({'background-position':'-'+options.otherWidth+'px'})
        }
      );
		}
	});
})(jQuery);
