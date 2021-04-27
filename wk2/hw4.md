### 印出因數

```
function factor(number){
	for (var i = 1; i <= number; i++){
		if (number % i === 0){
			console.log(i)
		}
	}
}

factor(15)
factor(20)
factor(4)
```