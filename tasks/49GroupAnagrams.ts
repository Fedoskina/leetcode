const groupAnagrams = (strs: string[]): string[][] => {
  const storage = {};
  for (let str of strs) {
      const key = str.split('').sort().join();
      
      if (storage[key] !== undefined) {
          storage[key].push(str)
      } else {
          storage[key] = [str]
      }
  }  

  return Object.values(storage)
};