### 首字母大寫

```
function firstchange(word){
	var arr = word.split('')
	arr [0] = arr[0].toUpperCase()
	return arr.join('')
}

console.log(firstchange('hello'))
console.log(firstchange(',hey'))
```