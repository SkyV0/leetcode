function reverse(x: number): number {
  // given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0
 //-231 <= x <= 231 - 1
    let reversed: number = 0;
    let negative: boolean = false;
    if (x < 0) {
        negative = true;
        x = -x;
    }
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (negative) {
        reversed = -reversed;
    }
    if (reversed < -2147483648 || reversed > 2147483647) {
        return 0;
    }
    return reversed;
};
//accepted