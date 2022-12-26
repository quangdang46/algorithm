function kmp(text, pattern) {
  let m = pattern.length;
  let n = text.length;
  let lps = new Array(m);
  let j = 0;
  computeLPSArray(pattern, m, lps);
  let i = 0;
  while (i < n) {
    if (pattern[j] === text[i]) {
      j++;
      i++;
    }
    if (j === m) {
      console.log("Found pattern at index " + (i - j));
      j = lps[j - 1];
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i = i + 1;
      }
    }
  }
}

function computeLPSArray(pattern, m, lps) {
  let len = 0;
  let i = 1;
  lps[0] = 0;
  while (i < m) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
}

kmp("abxabcabcaby", "abcaby");
