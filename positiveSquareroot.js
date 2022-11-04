/**
 * Question 2
 * 
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. * * The returned integer should be non-negative as well. 
 */

function posSquareRt(x){
    if(x<0){
        return console.log(`Kindly Enter a positive number`);
    }

    let sqrt = Math.floor(x**0.5)

    console.log(sqrt);
}

posSquareRt(225)