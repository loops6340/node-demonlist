# Demonlist
Unofficial node package to look for things from https://pointercrate.com/

## Examples:

### get demon
```js
const { getDemonByPosition, getDemonByName } = require('demonlist')

//you can get demon by position in the demonlist
const getDemonCreators = async () => {
  const demon = await getDemonByPosition(1)
  return demon.creators
}

//or by name
const getDemonCreators = async () => {
  const demon = await getDemonByName('tartarus')
  return demon.creators
}

//The function returns a promise, you can use then() or async / await
```
Some functionalities are missing, they will be added soon.