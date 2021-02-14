function solution(n) {
  let a = n.toString(2);
  let count = 0
  let max = 0
  
  for(let i = 0; i < a.length; i++){
      if (a[i] == 1 && a[i+1] == 0 || (count > 0 && a[i] == 0 && a[i+1] == 1)) {
         max = Math.max(max, count);
         count = 1;
      } else if (count > 0 && a[i] == 0 && a[i+1] == 0) {
         count++; 
    }
  }
    return max
}
