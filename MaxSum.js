[8, -1, -2, 2, -1, 4, -6]
[7, 1, , 3, 3, -1]
[-2, -2, 5, -1, 8, -2]
[-10, 9, 4, 6, -7]

// // - LOOP THROUGH ARRAY
// // - KEEP TRACK OF MAX SUM (REPLACING IT AS WE CONTINUE THROUGH ARRAY)
// // - A COMPARISON TO DETERMINE WHERE TO START NEW ARRAY

function algoHell (arr) {
  let maxSum = arr[0]
  let hold = arr[0]
  for (let i = 1; i < arr.length; i ++) {
    if ((maxSum + arr[i]) > maxSum) {
      maxSum += arr[i]
    } else {
      
    }
  }
}
