module.exports = bump;

function bump(man) {
  if (typeof man != 'string') man = man.toString();

  var lines = man.split('\n');
  var ts = '# ' + Date.now();
  var reg = /^# [0-9]{13}$/;

  if (reg.test(lines[1])) {
    lines[1] = ts;
  } else {
    lines.splice(1, 0, ts);
  };

  return lines.join('\n');
};

