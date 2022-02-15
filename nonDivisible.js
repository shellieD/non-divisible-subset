

function nonDivisibleSubset(s, k) {
    let remainderCount = new Array(k).fill(0); // create an empty array to count the value of the num of remainders
    console.log(remainderCount);
    for (i in s){ //loop finds remainder after each value in S is modulo by k - adds 1 to remainderCount for each found
        remainder = s[i] % k;
        console.log(remainder);
        remainderCount[remainder] +=1;
        console.log(remainderCount);
    }

    // only one number that is excactly divisible by K can be added to the subset
    // at index 0 the count shows how many numbers in the array are exactly divisible by 1
    // if there are no numbers exactly divisible, take none, if there are more than one only take one
    // and add it to the subset total.
    subset = (Math.min(remainderCount[0], 1));
    console.log(subset);
}


nonDivisibleSubset([19, 10, 12, 10, 24, 25, 22], 4);