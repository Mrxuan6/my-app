var initAry = [
  [],
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"]
];
function getNewAry(num) {
  var newAry = [];
  var numAry = Number(num)
    .toString()
    .replace(/0|1/g, "")
    .split("");
  for (var i = 0; i < numAry.length; i++) {
    newAry.push(initAry[numAry[i] - 1]);
  }
  // while (k<newAry.length){

  // }

  var z = 0;
  function getNextAry(preAry) {
    var resultAry = [];
    for (var u = 0; u < preAry.length; u++) {
      if (newAry.length > 1) {
        for (var p = 0; p < newAry[z + 1].length; p++) {
          resultAry.push(preAry[u] + newAry[z + 1][p]);
        }
      } else {
        resultAry.push(preAry[u]);
      }
    }
    z++;
    if (z < newAry.length - 1) {
      getNextAry(resultAry);
    } else {
      return resultAry;
    }
  }
  if(newAry.length>0){
    return getNextAry(newAry[0]);
  }else{
      return [];
  }
}
console.log(getNewAry(11112101110113));
