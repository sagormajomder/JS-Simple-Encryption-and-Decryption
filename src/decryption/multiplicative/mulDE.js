'use strict';
const decryptSubmit = document.getElementById('decryptSubmit');
const msg = document.querySelector('#text');
const key = document.querySelector('#key');
const result = document.querySelector('#demo');

let plainText = '';

Number.prototype.mod = function (n) {
  return ((this % n) + n) % n;
};

function GCD(a, b) {
  return b ? GCD(b, a % b) : a;
}
function findInverse(x, z) {
  let i = 1;
  while ((x * i) % z != 1) {
    i++;
  }
  return i;
}

const multiplicativeProcess = function () {
  if (msg.value.trim() === '' || key.value.trim() === '')
    return 'Please Type message and key for decryption message';

  const msgValue = msg.value.toLowerCase();

  const keyValue = Number(key.value);

  const msgValueArray = [...msgValue];

  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  if (GCD(keyValue, 26) != 1) return 'Cannot decrypt!';

  const invKey = findInverse(keyValue, 26);

  msgValueArray.forEach(item => {
    if (item.match('[a-z]')) {
      item = letters.indexOf(item);
      plainText += letters[(item * invKey).mod(26)];
    } else plainText += item;
  });
  return plainText;
};

decryptSubmit.addEventListener('submit', e => {
  plainText = '';
  e.preventDefault();
  result.value = multiplicativeProcess();
});
