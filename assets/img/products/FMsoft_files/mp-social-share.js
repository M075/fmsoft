(function(c){c(".smue-share-buttons a").click(function(){var a=c(this).attr("title"),b=null,d=encodeURIComponent(document.URL);"Facebook"===a?b="https://www.facebook.com/sharer/sharer.php?u=":"Twitter"===a?b="https://twitter.com/share?url=":"Google +"===a?b="https://plus.google.com/share?url=":"Pinterest"===a&&(b="//www.pinterest.com/pin/create/button/?url=");openWindow=window.open(b+d,a,"width=640,height=480,left="+(screen.width-640)/2+",top="+(screen.height-480)/2+",status=no,toolbar=no,menubar=no,resizable=yes");
return!1})})(jQuery);

