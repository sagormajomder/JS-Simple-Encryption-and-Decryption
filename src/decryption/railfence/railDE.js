'use strict';
const decryptSubmit = document.getElementById('decryptSubmit');
const msg = document.querySelector('#text');
const depth = document.querySelector('#key');
const result = document.querySelector('#demo');

let plainText = '';

const railfenceProcess = function () {
  if (msg.value.trim() === '' || depth.value.trim() === '')
    return 'Please Type message and key for encryption message';

  const msgValue = msg.value;
  const depthValue = depth.value;

  let fence = [];
  for (let i = 0; i < depthValue; i++) fence.push([]);
  let rail = 0;
  let change = 1;

  msgValue.split('').forEach(char => {
    fence[rail].push(char);
    rail += change;

    if (rail === depthValue - 1 || rail === 0) change = -change;
  });

  const rFence = [];
  for (let i = 0; i < depthValue; i++) rFence.push([]);

  let i = 0;
  let s = msgValue.split('');
  for (let r of fence) {
    for (let j = 0; j < r.length; j++) rFence[i].push(s.shift());
    i++;
  }

  rail = 0;
  change = 1;
  for (let i = 0; i < msgValue.length; i++) {
    plainText += rFence[rail].shift();
    rail += change;

    if (rail === depthValue - 1 || rail === 0) change = -change;
  }

  return plainText;
};

decryptSubmit.addEventListener('submit', e => {
  plainText = '';
  e.preventDefault();
  result.value = railfenceProcess();
});
