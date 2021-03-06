function repeatStringNumTimes(str, num) {
  let result = ''
  for (let i = 0; i < num; i++) {
    result += str
  }
  return result;
}

repeatStringNumTimes("abc", 3);

function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "n");

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num).concat('...') : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i]
      return num;
    }
  }
  return undefined;
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);

function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);


function titleCase(str) {
  let arr = str.toLowerCase().split(' ')
  let res = arr.map(item => {
    return item[0].toUpperCase() + item.slice(1)
  })
  return res.join(' ');
}

titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  let res = arr2.slice();
  res.splice(n, 0, ...arr1)
  return res;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

function bouncer(arr) {
  return arr.filter(item => {
    return Boolean(item)
  });
}

bouncer([7, "ate", "", false, 9]);

function getIndexToIns(arr, num) {
  let sorted = arr.sort((a, b) => a - b);
  let res = arr.length;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (sorted[i] >= num) {
      res = i
    }
  }
  return res;
}

getIndexToIns([3, 10, 5], 3)


function mutation(arr) {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();
  return second.split('').every(item => first.includes(item))
}

mutation(["Mary", "Aarmy"])

function chunkArrayInGroups(arr, size) {
  let result = [];
  while (arr.length) {
    result.push(arr.splice(0, size))
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


//JavaScript Algorithms and Data Structures Projects: Palindrome Checker
function palindrome(str) {
  return str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split('')
      .reverse()
      .join('')
}


palindrome("1 eye for of 1 eye.");


function convertToRoman(num) {
  const decNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  let result = "";

  for (let i = 0; i < decNum.length; i++) {
    while (decNum[i] <= num) {
      result += romanNum[i];
      num -= decNum[i];
    }
  }
  return result;
}

convertToRoman(127);

function rot13(str) {
  let alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let arr = str.split('');
  return arr.map(i => {
    let idx = alph.indexOf(i) - 13
    if (alph.indexOf(i) === -1) return i
    if (idx >= 0) {
      return alph[idx]
    } else {
      idx += 26
      return alph[idx]
    }
  }).join('');
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
