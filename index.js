// Code your solutions in this file
function writeCards(something, sm) {
  let array = []
  for (let i=0; i < something.length; i++) {
    array.push(`Thank you, ${something[i]}, for the wonderful ${sm} gift!`);
  }
  return array
}

function countDown(number) {
  let num = number
  while (num >= 0) {
    console.log(num)
    num -= 1
  }
}
