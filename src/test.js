// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2

countLayers([
  "AAAAAAAAA",
  "ABBBBBBBA",
  "ABBAAABBA",
  "ABBBBBBBA",
  "AAAAAAAAA"
]) ➞ 3

countLayers([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
]) ➞ 5



function countLayers(rug) {
  let layerCount = 0;
  let layerTracker = [];
  for (let i = 0; i < rug.length; i++) {
    if (layerTracker.indexOf(rug[i]) == -1) {
      layerCount++;
      layerTracker.push(rug[i]);
    }
  }
  return layerCount;
}


function countLayers(rug) {
  const halfway = rug.length / 2;
  let count = 1;
  for (let i = 1; i <= halfway; i++) {
    if (rug[i] !== rug[i - 1]) {
      count++;
    }
  }
  return count;
}