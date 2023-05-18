'use strict';
const decryptSubmit = document.getElementById('decryptSubmit');
const msg = document.querySelector('#text');
const key1 = document.querySelector('#key1');
const key2 = document.querySelector('#key2');
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

const affineProcces = function () {
  if (
    msg.value.trim() === '' ||
    key1.value.trim() === '' ||
    key2.value.trim() === ''
  )
    return 'Please Type message and keys for encryption message';

  const msgValue = msg.value.toLowerCase();
  console.log(msgValue);

  const keyValue1 = Number(key1.value);
  console.log(keyValue1);

  const keyValue2 = Number(key2.value);
  console.log(keyValue2);

  const msgValueArray = [...msgValue];
  console.log(msgValueArray);

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

  if (GCD(keyValue1, 26) != 1) return 'Cannot decrypt!';

  const invKey = findInverse(keyValue1, 26);
  console.log(invKey);

  msgValueArray.forEach(item => {
    if (item.match('[a-z]')) {
      item = letters.indexOf(item);
      plainText += letters[((item - keyValue2) * invKey).mod(26)];
    } else plainText += item;
  });
  return plainText;
};

decryptSubmit.addEventListener('submit', e => {
  plainText = '';
  e.preventDefault();
  console.log('Sagor');

  result.value = affineProcces();
});
