"use strict";

/* An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a 
computer network that uses the Internet Protocol for communication. There are two versions of the Internet 
Protocol, and thus two versions of addresses. One of them is the IPv4 address. 
Given a string, find out if it satisfies the IPv4 address naming rules.

  EX's:

    For inputString = "172.16.254.1", the output should be
    isIPv4Address(inputString) = true;

    For inputString = "172.316.254.1", the output should be
    isIPv4Address(inputString) = false.

    316 is not in range [0, 255].

    For inputString = ".254.255.0", the output should be
    isIPv4Address(inputString) = false.

    There is no first number.
*/
const isIPv4Address = IP => {
  let arr = IP.split('.');
  return arr.every(n => {
    if (n.charAt(0) === "0" && n.length > 1) return false;
    return n !== "" && n >= 0 && n <= 255;
  }) && arr.length === 4; 
}


console.log(isIPv4Address("172.16.254.1")); // true
console.log(isIPv4Address("172.316.254.1")); // false
console.log(isIPv4Address("01.254.255.0")); // false
console.log(isIPv4Address("0..1.0.0")); // false

console.log("0..1.0.0".split('.'))