var num = 5;
var words = ["act", "god", "cat", "dog", "tac"];

function anagrams(n, string_list) {
  // code here

  var result = {};
  string_list.forEach((eachString) => {
    let key = eachString.split("").sort().join("");
    if (result[key]) {
      result[key].push(eachString);
    } else {
      console.log(eachString);
      result[key] = [];
      result[key].push(eachString);
    }
  });
  Object.values(result).forEach((eachArray) => {
    console.log(...eachArray);
  });
}

anagrams(num, words);
