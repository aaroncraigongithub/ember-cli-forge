var exec = require('child_process').exec;
var cmd  = 'cd bower_components/forge && npm install && npm minify';

exec(cmd, function(error, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);
})
