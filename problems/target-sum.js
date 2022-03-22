/* 494. Target Sum
Medium

5757

225

Add to List

Share
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

 

Example 1:

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
Example 2:

Input: nums = [1], target = 1
Output: 1
 

Constraints:

1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000

Solution
Approach 1: Brute Force
Algorithm

The brute force approach is based on recursion. We need to try to put both the + and - symbols at every location in the given numsnums array and find out the assignments which lead to the required result SS.

For this, we make use of a recursive function calculate(nums, i, sum, S), which returns the assignments leading to the sum SS, starting from the i^{th}i 
th
  index onwards, provided the sum of elements up to the i^{th}i 
th
  element is sumsum. This function appends a + sign and a - sign both to the element at the current index and calls itself with the updated sumsum as sum + nums[i]sum+nums[i] and sum - nums[i]sum−nums[i] respectively along with the updated current index as i+1i+1. Whenever we reach the end of the array, we compare the sum obtained with SS. If they are equal, we increment the countcount value to be returned.

Thus, the function call calculate(nums, 0, 0, S) returns the required number of assignments.

Implementation


Complexity Analysis

Time complexity: O(2^n)O(2 
n
 ). Size of recursion tree will be 2^n2 
n
 . nn refers to the size of numsnums array.

Space complexity: O(n)O(n). The depth of the recursion tree can go up to nn.


Approach 2: Recursion with Memoization
Algorithm

In the last approach, we can observe that a lot of redundant function calls were made with the same value of ii as the current index and the same value of sumsum as the current sum, since the same values could be obtained through multiple paths in the recursion tree. In order to remove this redundancy, we make use of memoization as well to store the results which have been calculated earlier.

Thus, for every call to calculate(nums, i, sum, S), we store the result obtained in memo[i][sum + total]memo[i][sum+total], where total stands for the sum of all the elements from the input array. The factor of total has been added as an offset to the sumsum value to map all the sumsums possible to positive integer range. By making use of memoization, we can get the result of each redundant function call in constant time.

Implementation


Complexity Analysis

Time complexity: O(t \cdot n)O(t⋅n). The memo array of size O(t \cdot n)O(t⋅n) has been filled just once. Here, tt refers to the sum of the numsnums array and nn refers to the length of the numsnums array.

Space complexity: O(t \cdot n)O(t⋅n). The depth of recursion tree can go up to nn. The memo array contains t \cdot nt⋅n elements.


Approach 3: 2D Dynamic Programming
Algorithm

The idea behind this approach is as follows. Suppose we can find out the number of times a particular sum, say sum_isum 
i
​
  is possible up to a particular index, say ii, in the given numsnums array, which is given by say count_icount 
i
​
 . Now, we can find out the number of times the sum sum_i + nums[i]sum 
i
​
 +nums[i] can occur easily as count_icount 
i
​
 . Similarly, the number of times the sum sum_i - nums[i]sum 
i
​
 −nums[i] occurs is also given by count_icount 
i
​
 .

Thus, if we know all the sums sum_jsum 
j
​
 's which are possible up to the j^{th}j 
th
  index by using various assignments, along with the corresponding count of assignments, count_jcount 
j
​
 , leading to the same sum, we can determine all the sums possible up to the (j+1)^{th}(j+1) 
th
  index along with the corresponding count of assignments leading to the new sums.

Based on this idea, we make use of a dpdp to determine the number of assignments which can lead to the given sum. dp[i][j]dp[i][j] refers to the number of assignments which can lead to a sum of jj up to the i^{th}i 
th
  index. To determine the number of assignments which can lead to a sum of sum + nums[i]sum+nums[i] up to the (i+1)^{th}(i+1) 
th
  index, we can use dp[i][sum + nums[i]] = dp[i][sum + nums[i]] + dp[i-1][sum]dp[i][sum+nums[i]]=dp[i][sum+nums[i]]+dp[i−1][sum]. Similarly, dp[i][sum - nums[i]] = dp[i][sum - nums[i]] + dp[i-1][sum]dp[i][sum−nums[i]]=dp[i][sum−nums[i]]+dp[i−1][sum]. We iterate over the dpdp array in a row-wise fashion, i.e., firstly, we obtain all the sums which are possible up to a particular index along with the corresponding count of assignments and then proceed for the next element (index) in the numsnums array.

But, since the sumsum can range from -total to total, where total equals to the sum of the nums array, we need to add an offset of total to the sum indices (column number) to map all the sums obtained to positive range only.

At the end, the value of dp[n-1][S+total]dp[n−1][S+total] gives us the required number of assignments. Here, nn refers to the number of elements in the numsnums array.

The animation below shows the way various sums are generated along with the corresponding indices. The example assumes sumsum values to lie in the range of -6 to +6 just for the purpose of illustration. This animation is inspired by @Chidong

Current
1 / 7
Implementation


Complexity Analysis

Time complexity: O(t \cdot n)O(t⋅n). The dp array of size O(t \cdot n)O(t⋅n) has been filled just once. Here, tt refers to the sum of the numsnums array and nn refers to the length of the numsnums array.

Space complexity: O(t \cdot n)O(t⋅n). dp array of size t \cdot nt⋅n is used.


Approach 4: 1D Dynamic Programming
Algorithm

If we look closely at the last solution, we can observe that to evaluate the current row of dpdp, only the values of the last row of dpdp are needed. Thus, we can save some space by using a 1D DP array instead of a 2D DP array. The only change we need to make is that we have to create an array nextnext of the same size as dpdp so that we can update it while scanning through dpdp since it is not safe to mutate dpdp when the iteration is in progress. After the iteration is completed, we set dpdp equal to nextnext and create a new empty array nextnext before the next iteration starts, and so on.

Below code is inspired by @Chidong

Implementation


Complexity Analysis

Time complexity: O(t \cdot n)O(t⋅n). Each of the nn dp arrays of size tt has been filled just once. Here, tt refers to the sum of the numsnums array and nn refers to the length of the numsnums array.

Space complexity: O(t)O(t). Two dp arrays of size 2 \cdot t + 12⋅t+1 are used, therefore the space usage is O(t)O(t). */