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
