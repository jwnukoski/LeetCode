function sortedSquaredArray(array) {
    // Write your code here.
      let isSorted = true
      let lastNum = null
      const arr = array.map(val => {
          if (lastNum === null) {
              lastNum = val
          } else if (val > lastNum) {
              isSorted = false
          } 
          
          return val * val
      })
      
      if (!isSorted) {
          return arr.sort((a, b) => {
              return a - b
          })
      } else {
          return arr
      }
  }
  