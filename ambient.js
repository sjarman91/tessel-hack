var tessel = require('tessel');

var ambientlib = require('ambient-attx4');
var angryBobby = require('./angryBobby');

var ambient = ambientlib.use(tessel.port['A']);
ambient.on('ready', function () {
	var shouldSend = true;

	setInterval( function () {
		ambient.getSoundLevel( function(err, sounddata) {
	    
		if (err) throw err;
		var level = Math.floor(sounddata.toFixed(8)*100);
			
		if (level >= 15 && shouldSend === true) {
			shouldSend = false;
	    	
			setTimeout(function(){
				shouldSend = true;
			}, 10000);

			console.log("You're being too loud!!!  Level is at: ", level);
			angryBobby();
		}

		console.log(level, '-'.repeat(level));
	});
	}, 100);
});

ambient.on('error', function (err) {
  console.log(err);
});