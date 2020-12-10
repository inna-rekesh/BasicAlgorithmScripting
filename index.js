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
  for(let i=0; i<arr.length; i++){
    if(func(arr[i])){
      num = arr[i]
      return num;
    }
  }
  return undefined;
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);

function booWho(bool) {
  return typeof bool==='boolean';
}

booWho(null);
