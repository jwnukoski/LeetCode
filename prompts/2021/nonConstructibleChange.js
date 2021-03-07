function nonConstructibleChange(coins) {
    if (coins.length <= 0) {
          return 1
      }
      
      let minAmt = 0
      const c = coins.sort((a, b) => {
          return a - b;
      })
      
      for (const coin of c) {
          if (coin > minAmt + 1) {
              return minAmt + 1
          }
          minAmt += coin
      }
      
      return minAmt + 1
  }