for (let n = 0; n < 101; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log('FizzBuzz')
  } else if (n % 3 === 0) {
    console.log('Fizz')
  } else {
    console.log(n);
  }
}