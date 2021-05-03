### 水仙花數
```
var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  let [n, m] = lines[0].split(' ')
  n = Number(n)
  m = Number(m)

  for (var i = n; i <= m; i++) {
    var arr = String(i).split('')
    let ans = 0
    for (var k = 0; k < arr.length; k++) {
      ans += Number(arr[k])**arr.length
    }
    if (i === ans) {
      console.log(i)
    }
  }
}
```