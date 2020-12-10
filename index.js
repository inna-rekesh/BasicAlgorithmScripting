function repeatStringNumTimes(str, num) {
  let result = ''
  for(let i=0; i<num; i++){
    result+=str
  }
  return result;
}

repeatStringNumTimes("abc", 3);

function confirmEnding(str, target) {
  return str.slice(-target.length)===target;
}

confirmEnding("Bastian", "n");
