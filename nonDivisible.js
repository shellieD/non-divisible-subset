

function nonDivisibleSubset(s, k) {
    remainderCount = new Array(k).fill(0); // create an empty array to count the value of the num of remainders
    console.log(remainderCount);
    for (let i = 0; i < s.length; i++){
        remainder = i % k;
        remainderCount[remainder] += 1;
        console.log(remainderCount);
    }
}
nonDivisibleSubset([1, 2, 3, 4], 4);