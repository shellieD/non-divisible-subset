## Problem Statement

Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S is not evenly divisible by k.

### Example

S = [19, 10, 12, 10, 24, 25, 22] k = 4
One of the arrays that can be created is S[0] = [10, 12, 25]. Another is S[1] = [19, 22, 24]. After testing all permutations, the maximum length solution array has 3 elements.

## Logic

The above problem statement can be solved by determining the remainder of each number in the given set when divided by K, counting how many numbers return each remainder value and then satisfying the below conditions:-

* <strong>Condition 1 - </strong>Only one number with a remainder of 0, therefore perfectly divisibly by <strong>K</strong> can be included in the subset.  If you add two numbers together which are perfectly divisible by <strong>K</strong> then it stands to reason that the sum of said numbers will also be divisible by <strong>K</strong>.

* <strong>Condition 2 - </strong>If <strong>K</strong> is even, then only one number with a remainder of half of <strong>K</strong> can be included in the subset.  If two numbers with the remainder of half of <strong>K</strong> are added together, then the sum of those numbers will be perfectly divisible by <strong>K</strong>.  For example, if <strong>K</strong> is 4, and you have the numbers 2 and 6 which, by themselves are not perfectly disivisble by 4 but both leave a remainder of 2 (half of <strong>K</strong>), then when added together, the sum will be perfectly divisible by 4(<strong>K</strong>).  Therefore 2 and 6 cannot be included in the same subset.  e.g. 2 % 4 = 2 |  6 % 4 = 2 |  2 + 6 = 8 |  8 % 4 = 0

* <strong>Condition 3 - </strong>You can not have two numbers in the subset where the remainders of both numbers add up to K.  As an example, again if <strong>K</strong> is 4, and you have the numbers 5 and 7, neither are perfectly divisible by 4 but give the remainders 1 and 3 respectively, which once added are equal to 4(<strong>K</strong>).  Therefore, 5 and 7 cannot be included in the same subset as the sum of those two numbers would be exactly divisivible by 4. e.g. 5 + 7 = 12 | 12 % 4 = 0

## Function Logic

The first part of the function initialises a new array to the length of <strong>K</strong> where all values are set to 0.  This new array will be used to count how manynumbe We then iterate over the original array [S] and divide each value by <strong>K</strong> and add 1 at the corresponding index value.   If we use the example that K is 4, the only remainders from numbers when divided by 4 will be 0, 1, 2, and 3.  If the values of S are [1, 7, 2, 4], then the remainder count array will be:

| remainderCount | 0 | 1 | 2 | 3 |
|----------------|---|---|---|---|
| remainder      | 1 | 1 | 1 | 1 |

because... 

1 % 4 = 1 
<br>
7 % 4 = 3
<br>
2 % 4 = 2
<br>
4 % 4 = 0

``
let remainderCount = new Array(k).fill(0); 
    for (let i in s){ 
        remainder = s[i] % k;
        remainderCount[remainder] += 1;
    }
``

<br>

### Dealing with Condition 1

Firstly a new variable named subset is created which will store the amount of numbers which can be inluded in the subset that are not perfectly divisible by 4.

In order to satisfy <strong>Condition 1</strong>, we need to take the minimum value of either the number counted at remainderCount[0] or 1 and add it to the subset - as only a maximum of 1 number can be included in the subset where the remainder is 0.  In our example above, 1 is the minumum so 1 is added to the total of the subset.  If the value at remainderCount[0] was 0, then nothing would be added to the subset.  If the value at remainderCount[0] was 6, then only the 1 would be added to the subset.

``
let subset = (Math.min(remainderCount[0], 1));
``

<br>

### Dealing with Condition 2

In order to satisty <strong>Condition 2</strong>, if <strong>K</strong> is EVEN, we need to find half of <strong>K</strong> and then in a similar vein as above, only take the minimum value of the number counted at remainderCount[k/2] or 1 and add it to the subset - as only a maximum of 1 number can be included in the subset where the remainder is half of <strong>K</strong>.  Again, in our example above, 2 is half of <strong>K</strong> and we only have 1 number which gives this remainder, so 1 is added to the subset.  If the value at remainderCount[k/2] was 0, then nothing would be added to the subset.  If the value at remainderCount[k/2] was 6, then only 1 would be added to the subset.

``
if (k % 2 == 0) {
        subset += (Math.min(remainderCount[k/2], 1));
    }
``

### Dealing with Condition 3

As we have now dealt with numbers which are perfectly divisible by <strong>K</strong> and numbers where the remainders when divided by <strong>K</strong> are half of <strong>K</strong>, we can now deal with any number pairings where the remainders of two numbers are not the same but are equal to <strong>K</strong> when added together.  

Using the previous example, as we have already dealt with numbers where the remainder is 0 we can start the loop at remainderCount[1]. Whilst K is 4, k - remainderCount[1] = 3.  Therefore only numbers with EITHER a remainder of 1 OR a remainder of 3 should be included in the subset. 

As we are aiming to find out the maximum length of an subset,  we would take the largest number from either remainderCount[i] or remainderCount[k-i].  In the example, there are only 1 in each, so 1 is added to the total of subset. 

We then only need to loop through the array until we reach the midway point (k/2) as all number pairings would have been exhausted by this point. 

``
for (let i = 1; i < k/2; i ++) {
        subset += (Math.max(remainderCount[i], remainderCount[k-i]));
    }
    return subset;
`` 

Once the loop is completed and all conditions are met, the subset is returned which gives us the maximum length of an array where given a set of distinct integers the sum of any 2 numbers in S is not evenly divisible by k.
