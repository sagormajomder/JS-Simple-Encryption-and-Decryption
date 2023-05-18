'use strict';
const encryptSubmit = document.getElementById('encryptSubmit');
const msg = document.querySelector('#text');
const key1 = document.querySelector('#key1');
const key2 = document.querySelector('#key2');
const result = document.querySelector('#demo');

let cipherText = '';

Number.prototype.mod = function (n) {
  return ((this % n) + n) % n;
};

const affineProcces = function () {
  if (
    msg.value.trim() === '' ||
    key1.value.trim() === '' ||
    key2.value.trim() === ''
  )
    return 'Please Type message and key for encryption message';

  const msgValue = msg.value.toLowerCase();
  const keyValue1 = Number(key1.value);
  const keyValue2 = Number(key2.value);

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

  msgValueArray.forEach(item => {
    if (item.match('[a-z]')) {
      item = letters.indexOf(item);
      cipherText += letters[(item * keyValue1 + keyValue2).mod(26)];
    } else cipherText += item;
  });
  return cipherText;
};

encryptSubmit.addEventListener('submit', e => {
  cipherText = '';
  e.preventDefault();
  result.value = affineProcces();
});
