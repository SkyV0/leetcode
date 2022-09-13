function lengthOfLongestSubstring(s: string): number {
//     Given a string s, find the length of the longest substring without repeating characters.
//     0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
    let max = 0;
    let start = 0;
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char)) {
            start = Math.max(map.get(char) + 1, start);
        }
        map.set(char, i);
        max = Math.max(max, i - start + 1);
    }
    return max;
    
};