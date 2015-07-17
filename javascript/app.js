$(function(){
	var 	$document = $(document),
			$portfolio = $('#portfolio'),
			$responsibilities = $('#responsibilities'),
			documentHeight = $(window).height();

	$('.portfolio-project').outerHeight(documentHeight);
	$('#cv').css('min-height', documentHeight);
	
	$("#carousel").owlCarousel({
        navigation: false,
        paginationSpeed : 1000,
        goToFirstSpeed : 2000,
        singleItem : true,
        autoHeight : true,
        transitionStyle:"fade"
  	});


	$document.on('scroll', function(){
		var projects = [{
							'name': 'give2gether',
							'plan': true,
							'design': true,
							'dev': false
						},
						{
							'name': 'creativeJob',
							'plan': true,
							'design': false,
							'dev': false
						},
						{
							'name': 'woj',
							'plan': false,
							'design': false,
							'dev': true
						}
			],
			$plan 	= $('#plan'),
			$design = $('#design'),
			$dev 	= $('#dev'),
			projectName;


		$portfolio.offset().top <= $(document).scrollTop() ? $responsibilities.addClass('fixed') : $responsibilities.removeClass('fixed');

		$('section.portfolio-project').each(function(index){
			if ( $(document).scrollTop() >= $(this).offset().top - $(this).outerHeight()/2 && $(document).scrollTop() <= $(this).offset().top + $(this).outerHeight()/2 ) {
				projects[index].plan ? $plan.addClass('selected') : $plan.removeClass('selected');
				projects[index].design ? $design.addClass('selected') : $design.removeClass('selected');
				projects[index].dev ? $dev.addClass('selected') : $dev.removeClass('selected');
				projectName = projects[index].name;
			}
		});

		$('.portfolio-project-titles').each(function(index){
			$(this).hasClass(projectName) ? $(this).removeClass('fade-out').delay(2500).addClass('fade-in') : $(this).addClass('fade-out');
		});
	});
});