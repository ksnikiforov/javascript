function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(gcd_two_numbers(12, 13));


function RndInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  

  // expected output: 0, 1 or 2

  console.log(Math.random());
  // expected output: a number between 0 and 1
  
  console.log(RndInt(1));
  // expected output: 0
  console.log(RndInt(3));