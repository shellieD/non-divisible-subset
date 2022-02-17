## Problem Statement

Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S is not evenly divisible by k.

### Example

S = [19, 10, 12, 10, 24, 25, 22] k = 4
One of the arrays that can be created is S[0] = [10, 12, 25]. Another is S[1] = [19, 22, 24]. After testing all permutations, the maximum length solution array has 3 elements.

### Logic

The above problem statement can be solved by determining the remainder of each number in the given set when divided by K, counting how many numbers return each remainder value and then satisfying the below conditions:-

* Only one number with a remainder of 0, therefore perfectly divisibly by <strong>K</strong> can be included in the subset.  If you add two numbers together which are perfectly divisible by <strong>K</strong> then it stands to reason that the sum of said numbers will also be divisible by <strong>K</strong>.

* If <strong>K</strong> is even, then only one number with a remainder of half of <strong>K</strong> can be included in the subset.  If two numbers with the remainder of half of <strong>K</strong> are added together, then the sum of those numbers will be perfectly divisible by <strong>K</strong>.  For example, if <strong>K</strong> is 4, and you have the numbers 2 and 6 which, by themselves are not perfectly disivisble by 4 but both leave a remainder of 2 (half of <strong>K</strong>), then when added together, the sum will be perfectly divisible by 4(<strong>K</strong>).  Therefore 2 and 6 cannot be included in the same subset.  e.g. 2 % 4 = 2 |  6 % 4 = 2 |  2 + 6 = 8 |  8 % 4 = 0

* You can not have two numbers in the subset where the remainders of both numbers add up to K.  As an example, again if <strong>K</strong> is 4, and you have the numbers 5 and 7, neither are perfectly divisible by 4 but give the remainders 1 and 3 respectively, which once added are equal to 4(<strong>K</strong>).  Therefore, 5 and 7 cannot be included in the same subset as the sum of those two numbers would be exactly divisivible by 4.  5 + 7 = 12 | 12 % 4 = 0