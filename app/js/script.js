(function($) {
	var toggleOn = document.getElementById('toggle-on');
	var toggleOff = document.getElementById('toggle-off');
	var ledStatus = document.getElementById('led-status');

	toggleOn.addEventListener('click', function(){
		$.post('http://czaaspi.localtunnel.me/led', {
			command: 'on'
		})
			.done(function(res){
				$(toggleOn).addClass('button--disabled');
				$(toggleOff).removeClass('button--disabled');

				setStatus(res);
			});
	});

	toggleOff.addEventListener('click', function(){
		$.post('http://czaaspi.localtunnel.me/led', {
			command: 'off'
		})
			.done(function(res){
				$(toggleOff).addClass('button--disabled');
				$(toggleOn).removeClass('button--disabled');

				setStatus(res);
			});
	});


	function setStatus(status) {			
		ledStatus.innerHTML = status;
	}
}(jQuery));
