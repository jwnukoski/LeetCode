// Prompt URL: https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const concated = nums1.concat(nums2).sort((a, b) => {
    return a - b
  })

  if (concated.length % 2 === 0) {
    return (concated[Math.floor((concated.length - 1) / 2)] + concated[Math.ceil((concated.length - 1) / 2)]) / 2
  } else {
    return concated[(concated.length - 1) / 2]
  }
};

// This solution doesn't fulfill the O(log (m+n)) requirements