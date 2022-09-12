    //Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

//Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

//1 <= num1.length, num2.length <= 200
//num1 and num2 consist of digits only.
//Both num1 and num2 do not contain any leading zero, except the number 0 itself.
//Example 1:
//Input: num1 = "2", num2 = "3"
//Output: "6"
//Example 2:
//Input: num1 = "123", num2 = "456"
//Output: "56088"
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    let result = [];
    let carry = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
        let temp = [];
        for (let j = num2.length - 1; j >= 0; j--) {
            let sum = parseInt(num1[i]) * parseInt(num2[j]) + carry;
            carry = Math.floor(sum / 10);
            temp.push(sum % 10);
        }
        if (carry > 0) {
            temp.push(carry);
        }
        carry = 0;
        for (let k = 0; k < temp.length; k++) {
            result[i + k + 1] = (result[i + k + 1] || 0) + temp[k];
        }
    }
    let index = 0;
    while (index < result.length && result[index] === 0) {
        index++;
    }
    return result.slice(index).join('');
};
//wrong solution