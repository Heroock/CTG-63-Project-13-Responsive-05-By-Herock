/* ===============================================================================
 * Name: JS Style V2.0 || 2017 !!!
 * Company: Banglasoft@Corporation™ !!!
 * Founder: Engr. Md Mahadi Hassan Herock !!!
 * Website URL-I: http://www.banglasoft.net !!!
 * Website URL-II: http://www.bangla-soft.com !!!
 * Description: Try To Do Something Better Than Other !!!
 ============================================================================== */

/* ====================== JS Plugins Start From Here ======================== */

/* ============== Progress Circle JS Plugin Start From Here =============== */

(function ($) {

	$('.skill').appear(function () {

		// For First Circle
		$('.first.circle').circleProgress({
			startAngle: -Math.PI / 8 * 4,
			value: .9,
			fill: {
				gradient: [['#30bae7', 1], ['#30bae7', 1]],
			},
			animation: {
				duration: 5000,
				easing: 'circleProgressEasing'
			},
			size: 200.0,
		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
		});

		// For Second Circle
		$('.second.circle').circleProgress({
			startAngle: -Math.PI / 8 * 4,
			value: .75,
			fill: {
				gradient: [['#d74680', .5], ['#d74680', .5]],
			},
			animation: {
				duration: 5000,
				easing: 'circleProgressEasing'
			},
			size: 200.0,

		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
		});

		// For Third Circle
		$('.third.circle').circleProgress({
			startAngle: -Math.PI / 8 * 4,
			value: .7,
			fill: {
				gradient: [['#15c7a8', .5], ['#15c7a8', .5]],
			},
			animation: {
				duration: 5000,
				easing: 'circleProgressEasing'
			},
			size: 200.0,

		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
		});

		// For fourth Circle
		$('.fourth.circle').circleProgress({
			startAngle: -Math.PI / 8 * 4,
			value: .85,
			fill: {
				gradient: [['#eb7d4b', .5], ['#eb7d4b', .5]],
			},
			animation: {
				duration: 5000,
				easing: 'circleProgressEasing'
			},
			size: 200.0,

		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
		});
	});
})

(jQuery);

/* ================= Progress Circle JS Plugin End Here =================== */