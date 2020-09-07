/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return S.split('').filter(element => !vowels.includes(element)).join('')
};