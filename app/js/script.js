(function($) {
	var toggleOn = document.getElementById('toggle-on');
	var toggleOff = document.getElementById('toggle-off');
	var ledStatus = document.getElementById('led-status');

	toggleOn.addEventListener('click', function(){
		$.post('http://czaaspi.localtunnel.me/led', {
			command: 'on'
		})
			.done(function(res){
				setStatus(res);
			});
	});

	toggleOff.addEventListener('click', function(){
		$.post('http://czaaspi.localtunnel.me/led', {
			command: 'off'
		})
			.done(function(res){
				setStatus(res);
			});
	});


	function setStatus(status) {			
		ledStatus.innerHTML = status;
	}
}(jQuery));
