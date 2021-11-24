### You are given an array arr of N integers. For each index i, you are required to determine the number of contiguous subarrays that fulfill the following conditions:

_The value at index i must be the maximum element in the contiguous subarrays, and
These contiguous subarrays must either start from or end on index i._

### Signature
int[] countSubarrays(int[] arr)

### Input
Array arr is a non-empty list of unique integers that range between 1 to 1,000,000,000
Size N is between 1 and 1,000,000

### Output
An array where each index i contains an integer denoting the maximum number of contiguous subarrays of arr[i]

### Example:
arr = [3, 4, 1, 6, 2]
output = [1, 3, 1, 5, 1]

### Explanation:
For index 0 - [3] is the only contiguous subarray that starts (or ends) with 3, and the maximum value in this subarray is 3.

For index 1 - [4], [3, 4], [4, 1]

For index 2 - [1]

For index 3 - [6], [6, 2], [1, 6], [4, 1, 6], [3, 4, 1, 6]

For index 4 - [2]

So, the answer for the above input is [1, 3, 1, 5, 1]



### Complexity
#### Hint-1
_Any solution must have time and space complexities of at least O(N) to deal with the array of N integers. A relatively simple solution considering all possible contiguous subarrays, or in fact any solution counting the valid subarrays one-by-one, would require a time complexity of at least O(N^2). However, a number of observations can allow this to be optimized down to the ideal time complexity of O(N). For example, letting L[i] be the number of valid subarrays ending at index i (useful to compute on the way to the final answer), consider how we might efficiently compute L[i] for each i from 1 to N by reusing past information rather than computing it from scratch._

#### Hint-2

_When analyzing such a solution, note that even if we’re computing N values L[1..N], and computing any single one of those values might take on the order of N steps, the overall time complexity will not necessarily be O(N^2) - we should instead consider how many steps may occur in total across all N of them in the worst case._

