/*

Question 3

Given a string s, reverse only all the vowels in the string and return it. 

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once. 

Example 

Input: s = "hello" 
Output: "holle" 
*/

function reverseVowels(str) {
    let strSpl = str.split('')
    let vowelPos = []
    let newStr 

    var getVowels = (stringArr) => {
        stringArr.forEach((letter, index) => {
            if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
                vowelPos.push(index)
            } 
        })
        vowelPos.reverse()
        getChangedStr()
    }

    const getChangedStr = ()=>{
        vowelPos.reverse().forEach((letter)=>{
            newStr += strSpl.splice(letter,1,(strSpl[letter]))
        })
    }

    getVowels(strSpl)
}


reverseVowels('hello')