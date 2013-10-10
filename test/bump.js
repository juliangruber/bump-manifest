var test = require('tape');
var bump = require('..');

test('bump timestamp', function(t) {
  var old = 'CACHE MANIFEST\n# 1381439992058\nNETWORK';
  var bumped = bump(old);

  t.ok(/^# [0-9]{13}$/.test(bumped.split('\n')[1]));
  t.notEqual(old, bumped);
  t.ok(Number(old.substr(16, 13)) < Number(bumped.substr(16, 13)));

  t.end();
});
