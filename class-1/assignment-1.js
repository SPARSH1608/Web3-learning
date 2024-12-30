const crypto = require('crypto');

let input = 596130;
while (true) {
  const hash = crypto
    .createHash('sha256')
    .update(input.toString())
    .digest('hex');
  if (hash.startsWith('00000')) {
    console.log(input);
    break;
  } else input += 1;
}
