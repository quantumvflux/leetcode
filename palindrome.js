var isPalindrome = function (x) {
  const array = x.toString().split("");
  const reversedArray = [...array].reverse();
  return array.join(",") == reversedArray.join(",");
};

console.log(isPalindrome(-121));
