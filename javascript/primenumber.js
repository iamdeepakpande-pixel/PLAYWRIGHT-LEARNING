// prime number
// A prime number is a whole number greater than 1 that can only be divided evenly by 1 and itself, with examples like 2, 3, and 5.
// remainder of the division of a number by 1 and itself is 0, and for all other numbers, the remainder is not 0.

 // 11 is fully divisible by 1 & 11 so start loop from 2 to 10

// flagging concept - if a number is prime then flag will be true, if not then flag will be false

// let flag = true;  // assume number is prime
// let flag = false;  // assume number is not prime

for (let num =4; num <=100; num++)
{
  if (num % 2== 0)
  {
  console.log(`${num} is a prime number`);
}
else 
{
  let isPrime = true
  for (let i=3; i<= num/2; i=i+2)
  {
    if (num % i == 0)
    {
      isPrime = false;
      break;
    }
  }
  if (isPrime)
  {
    console.log(`${num} is a prime number`);
  }
  else
  {
    console.log(`${num} is not a prime number`);
  }
}
}