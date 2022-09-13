// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.
// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?

function minWindow(s: string, t: string): string {
    const map = new Map();
    for (const char of t) {
        map.set(char, map.get(char) + 1 || 1);
    }
    let left = 0;
    let right = 0;
    let result = '';
    let count = map.size;
    while (right < s.length) {
        const char = s[right];
        if (map.has(char)) {
            map.set(char, map.get(char) - 1);
            if (map.get(char) === 0) {
                count--;
            }
        }
        right++;
        while (count === 0) {
            const temp = s.substring(left, right);
            if (!result || temp.length < result.length) {
                result = temp;
            }
            const char = s[left];
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
                if (map.get(char) > 0) {
                    count++;
                }
            }
            left++;
        }
    }
    return result;
};