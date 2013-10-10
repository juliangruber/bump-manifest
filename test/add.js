var test = require('tape');
var bump = require('..');

test('add timestamp', function(t) {
  var old = 'CACHE MANIFEST\n\nNETWORK';
  var bumped = bump(old);
  t.ok(/^# [0-9]{13}$/.test(bumped.split('\n')[1]));
  t.end();
});
