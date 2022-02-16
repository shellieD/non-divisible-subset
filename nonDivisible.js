
function nonDivisibleSubset(s, k) {
    // If k is 4, then only remainders 0, 1, 2, 3 are possible.
    // Here we are creating an array where all values are 0, to the length of k which will be used to 
    // count how many numbers in S produce the remainder at the index.
    let remainderCount = new Array(k).fill(0); 
    for (let i in s){ //loop finds remainder after each value in s % k - adds 1 to remainderCount for each found
        remainder = s[i] % k;
        remainderCount[remainder] += 1;
    }

    // Only one number that is exactly divisible by k can be added to the subset
    // At index 0 the count shows how many numbers in the array are exactly divisible by 1
    // if there are no numbers exactly divisible, add nothing to subset if there are more than one only add 1.
    // and add it to the subset total.
    subset = (Math.min(remainderCount[0], 1));

    // If k is even, then only one number where K % 2 == 0 can be added to the subset
    // If there are no numbers where K % 2 == 0 then add nothing to the subset. 
    // If there are more than 1 numbers where k 5 2 == 0, then only add 1.
    if (k % 2 == 0) {
        subset += (Math.min(remainderCount[k/2], 1));
    }

    // need to check for pairs where the remainders == k 
    // and only take the maximum count from one of the pairs
    for (let i = 1; i < k/2; i ++) {
        subset += (Math.max(remainderCount[i], remainderCount[k-i]));
        console.log(subset);
    }
    return subset;
}

nonDivisibleSubset([1, 7, 2, 4], 3);




