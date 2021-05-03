### 判斷質數

```
for (let i = 1; i <= Number(lines[0]); i++) {
  let isPrime = true
  if (Number(lines[i]) === 1) {
    isPrime = false
  }
  for (let j = 2; j < Number(lines[i]); j++) {
    if (Number(lines[i]) % j === 0) {
      isPrime = false
      break
    }
  }
  if (isPrime) {
    console.log('Prime')
  } else {
    console.log('Composite')
  }
}
```