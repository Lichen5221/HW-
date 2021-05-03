### 判斷迴文

```
  let word = lines[0]
  let w = ''
  for(var i = word.length - 1; i >= 0; i--) {
    w += word[i]
  }

  if (word == w) {
    console.log('True')
  } else {
    console.log('False')
  }
```