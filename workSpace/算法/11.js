// 最大和的子数组

let arr = [-2, 2, -3, 4, -1, 2, 1, -5, 3] 

// [4, -1, 2, 1] // 6

const maxSonArray = (nums) => {
  // let max = -Infinity // 最大值
  // let newMax = nums[0] // 比较的过程中会产生的最大值
  // for (let i = 1; i < nums.lengthl; i++) {
  //   // newMax + nums[i]  > nums[i]
  //   newMax = Math.max(newMax + nums[i], nums[i])
  //   max = Math.max(max, newMax)
  // }
  // return max

  let max = {
    num: -Infinity,
    start: 0,
    end: 1
  }
  let newMax = {
    num: nums[0],
    start: 0,
    end: 1
  }

  for (let i = 1; i < nums.length; i++) {
    if (newMax.num + nums[i] > nums[i]) {
      newMax.num = newMax.num + nums[i]
      newMax.end = i + 1
    } else {
      newMax.num = nums[i]
      newMax.start = i
      newMax.end = i + 1
    }

    if (max.num < newMax.num) {
      max.num = newMax.num
      max.start = newMax.start
      max.end = newMax.end
    }
  }
  let arr = nums.slice(max.start, max.end)
  console.log(arr);
  return max.num
}


maxSonArray(arr)