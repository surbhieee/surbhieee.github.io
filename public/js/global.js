//Generates random color.
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '0x';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Generates random Number
function getRandomNumber(min, max) {
  var value = Phaser.Math.Between(min, max);
  return value;
}

//Non-Repetative Random Numbers
function generateRange(pCount, pMin, pMax) {
  min = pMin < pMax ? pMin : pMax;
  max = pMax > pMin ? pMax : pMin;
  var resultArr = [], randNumber;
  while (pCount > 0) {
    randNumber = Math.round(min + Math.random() * (max - min));
    if (resultArr.indexOf(randNumber) == -1) {
      resultArr.push(randNumber);
      pCount--;
    }
  }
  return resultArr;
}