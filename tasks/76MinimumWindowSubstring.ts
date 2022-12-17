const minWindow = (s, t) => {
  let windowStart = 0
  let result = ''
  let map = {}
  
  const tMap = {}
      for (const ch of t) {
          tMap[ch] = tMap[ch] ? tMap[ch] + 1 : 1
      }
  
  const isMapValid = (map) => {
      for (const ch in tMap) {
          if (!map.hasOwnProperty(ch) || (map[ch] - tMap[ch] < 0)) {
              return false;
          }
      }
      
      return true;
  }
  
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
      const currentElement = s[windowEnd]
      map[currentElement] = map[currentElement] ? map[currentElement] + 1 : 1
      
      while(isMapValid(map) && windowStart <= windowEnd) {
          const candidate = s.substring(windowStart, windowEnd + 1);
          if (result === '' || candidate.length < result.length) {
              result = candidate;
          }
          
          const startElement = s[windowStart]
          map[startElement]--
          windowStart = windowStart + 1
          
      }
      
      
  }
  
  return result
};