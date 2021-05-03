### 聯誼順序比大小

```
  let n = Number(lines[0])
    for (let i=1; i<= n; i++) {
        let [a, b, k] = lines[i].split(' ')
        if (k == 1) {
            if (BigInt(a) > BigInt(b)) {
                console.log('A')
            } else if (BigInt(a) === BigInt(b)) {
                console.log('DRAW')
            } else {
                console.log('B')
            }
        } else {
            if (BigInt(a) > BigInt(b)) {
                console.log('B')
            } else if (BigInt(a) === BigInt(b)) {
                console.log('DRAW')
            } else {
                console.log('A')
            }
        }       
    }
```