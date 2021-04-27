### 反轉字串

```
function res(string){
	var word = ''
	for(var i = string.length - 1; i >= 0; i--) {
		word += string[i]
	}
	return word
}

console.log(res('hello'))
```