$(document).ready(function() {
    $('.body__chart-wrapper').pieChart({  
        barColor: '#13e28d',  // bar color
        trackColor: '#2b3040',   // background color        
        lineWidth: 3,         // line width 
				size: 76,
        onStep: function (from, to, percent) {
            $(this.element).find('.body__chart-value').text(Math.round(percent) / 10);
        },
        animate: {          // custom animation
            duration: 2000,
            enabled: true
        },
    });
	
		$(".nav__item").click(function(e){
			e.preventDefault;
			let tabId = $(this).attr("data-tab");
			$(".visible").removeClass("visible");
			$(tabId).addClass("visible");
		})
});