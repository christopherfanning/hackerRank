// Task
// https: //www.hackerrank.com/challenges/js10-switch/problem?isFullScreen=true
// Complete the getLetter(s)
// function in the editor.It has one parameter: a string, , consisting of lowercase English alphabetic letters(i.e., a through z).It must
// return A, B, C, or D depending on the following criteria:

//   If the first character in string is in the set, then
// return A.
// If the first character in string is in the set, then
// return B.
// If the first character in string is in the set, then
// return C.
// If the first character in string is in the set, then
// return D.



function getLetter(s) {
  let letter;
  // Write your code here
  // const vowels = ["a", "e", "i", "o", "u"];
  const aGroup = "aeiou";
  const bGroup = "bcdfg";
  const cGroup = "hjklm";
  const dGroup = "npqrstvwxyz";
  // const
  if (aGroup.includes(s[0])) {
    letter = "A";
  } else if (bGroup.includes(s[0])) {
    letter = "B";
  } else if (cGroup.includes(s[0])) {
    letter = 'C';
  } else if (dGroup.includes(s[0])) {
    letter = 'D';
  }
  return letter;
}
