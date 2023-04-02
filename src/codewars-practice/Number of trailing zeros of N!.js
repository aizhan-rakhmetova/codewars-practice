// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
//
//     N! = 1 * 2 * 3 *  ... * N
//
// Be careful 1000! has 2568 digits...
//
// For more info, see: http://mathworld.wolfram.com/Factorial.html
//
//     Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
//
// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

function zeros(n) {
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

// To find the number of trailing zeros in the factorial of a given number, we need to count the number of times 10 can be divided out of the factorial. Since 10 is the product of 2 and 5, we need to count the number of times 2 and 5 appear as factors in the product. Since the number of 2's will always be greater than or equal to the number of 5's, we only need to count the number of times 5 appears as a factor.
//
//     We can do this by dividing the number by 5 and adding the quotient to the answer, then repeating the process with the quotient until it is less than 5. The final sum will be the number of trailing zeros.
//     This function takes a number n and returns the number of trailing zeros in
// n!.