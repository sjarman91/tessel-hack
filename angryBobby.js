var http = require('http');
var https = require('https');

var angryBobby = function() {
  var options = {
    host: 'hooks.slack.com',
    path: '/services/T024FPYBQ/B2JPDA8KF/QaczRe2VAko0oGtotmY9JkVz',
    port: '443',
    method: 'POST'
  };

  var req = https.request(options);

  req.write('{"text":"Bobby says HUSH"}');
  req.end();
}

module.exports = angryBobby;
