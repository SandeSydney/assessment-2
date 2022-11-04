/**
 * Qtn 1: Given an integer x, return true if x is a palindrome, and false otherwise. 

Example 

Input: x = -121 
Output: false 
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore, it is not a palindrome. 
 */

function isPalindrome(x){
    let xStrReverse = x.toString().split('').reverse()

    let xRevInt = parseInt(xStrReverse.join(''))

    if(x == xRevInt){
        return console.log(`True`);
    } else{
        return console.log(`False`);
    }
}

isPalindrome(-121)
