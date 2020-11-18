/* Find the sum of all of the even Fibonacci integers that are less 4 million */

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

const fib = (n) => {
  let a = 0, b = 1, temp;
  let sum = 0;
  while (n >= 0) {
    temp = a;
    a = b;
    b = a + temp;
    n--;
    sum += a;
  }
  return sum - 1;
}

const fibV2 = n => {
  return n <= 1 ? 1 : fibV2(n - 1) + fibV2(n - 2);
}

const fibSum = (n = 4000000) => {
  let a = 0, b = 1, sum = 0, temp;
  n--;
  while(b <= n) {
    temp = a;
    a = b;
    b = a + temp;
    if (a % 2 === 0) sum += a;
  }
  return sum;
}

const fibSumV2 = (n, ans, sum = 0) => {
  ans = 0;
  if (n <= 1) return 1;

  sum = fibSumV2(n - 1, ans, sum) + fibSumV2(n - 2, ans, sum);
  if (sum % 2 === 0) {
    ans += sum;
  }
  return ans;
}
console.log(fibSumV2(40))


const fibSome = (n = 6) => {
  let a = 0, b = 1, c = 0, sum = 0, count = 0;
  while (count < n) {
    // initialize three variables
    // a is the first number, b the number after a, and c is a + b
    // then a becomes b and b becomes c and c becomes a + b
    a = b;
    b = c;
    c = a + b;
    if (c % 2 === 0) sum += c;
    count++;
  }
  return sum;
}

console.log(fibSum(12));
