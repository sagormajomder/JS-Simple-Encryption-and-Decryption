'use strict';
const encryptSubmit = document.getElementById('encryptSubmit');
const msg = document.querySelector('#text');
const depth = document.querySelector('#key');
const result = document.querySelector('#demo');

let cipherText = '';

const railfenceProcess = function () {
  if (msg.value.trim() === '' || depth.value.trim() === '')
    return 'Please Type message and key for encryption message';

  const msgValue = msg.value.split(' ').join('');
  const depthValue = depth.value;

  let fence = [];
  for (let i = 0; i < depthValue; i++) fence.push([]);
  let rail = 0;
  let change = 1;

  for (let char of msgValue.split('')) {
    fence[rail].push(char);
    rail += change;

    if (rail === depthValue - 1 || rail === 0) change = -change;
  }

  for (let rail of fence) cipherText += rail.join('');

  return cipherText;
};

encryptSubmit.addEventListener('submit', e => {
  cipherText = '';
  e.preventDefault();
  result.value = railfenceProcess();
});
