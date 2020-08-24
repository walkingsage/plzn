$( document ).ready(function() {
    var sizer = '.sizer4';

    var container = $('#photos');

    container.imagesLoaded(function(){
    	container.masonry({
    		itemSelector: '.item',
    		columnWidth: sizer,
    		percentPosition: true
    	});
    });
});

