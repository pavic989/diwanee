$(document).ready(function(){
	$('#hamburger_menu').on('click', function(){
		$('nav').slideToggle('slow', function(){
			$('li').on('click',function(){
				$('nav').slideUp('slow');
			})
		});
	});
	$(document).ready(function(){
		var displaySize = $(window).width();
		var projectMenagerParent = $('.jobsSectionNoBg');
		var projectMenagerChild = $('.jobsSectionNoBg').find('button.tabletHoverProjectMenager');

		if( displaySize > 320){
			$('.jobsSectionWithBg').hover(function(){
				$(this).find('.jobsAdHover').fadeToggle('slow');
			});
			projectMenagerParent.hover(function(){
				projectMenagerChild.fadeToggle('slow');
			})
		} else {
			return false;
		};
	});
	$('a[data-scroll]').scroller();
})





