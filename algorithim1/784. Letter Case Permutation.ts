// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

// Constraints:

// 1 <= s.length <= 12
// s consists of lowercase English letters, uppercase English letters, and digits.
function letterCasePermutation(s: string): string[] {
    const result: string[] = [];
    const backtrack = (start: number, path: string) => {
        if (path.length === s.length) {
            result.push(path);
            return;
        }
        for (let i = start; i < s.length; i++) {
            if (s[i].match(/[a-z]/i)) {
                backtrack(i + 1, path + s[i].toLowerCase());
                backtrack(i + 1, path + s[i].toUpperCase());
            } else {
                backtrack(i + 1, path + s[i]);
            }
        }
    }
    backtrack(0, '');
    return result;
};