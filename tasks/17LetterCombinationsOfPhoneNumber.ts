const letterCombinations = (digits: string): string[] => {
  if (digits == null || digits.length === 0) return [];

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const result: string[] = [];
  const go = (i, s) => {
    if (i === digits.length) {
      result.push(s);
      return;
    }

    for (const char of map[digits[i]]) {
      go(i + 1, s + char);
    }
  };

  go(0, '');
  return result;
};