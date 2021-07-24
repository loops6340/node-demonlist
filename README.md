# Demonlist
Unofficial node package to look for things from https://pointercrate.com/

## Examples:

### Getting demon:

```js
const { Demon } = require('demonlist')

const getTop1Creators = async () => {
  const demon = await new Demon().getByPosition(1)
  return demon.creators
}

//or

const getTartarusCreators = async () => {
  const demon = await new Demon().getByName('tartarus')
  return demon.creators
}

//The function returns a promise, you can use then() or async / await
```

### Getting random demon:

```js
const { Demon } = require('demonlist')

const getRandomDemon = async () => {
  const demon = await new Demon().random({ after: 2, limit: 4 })
  console.log(demon.name, demon.position)
  // Zodiac or Kenos (3 or 4)
}
// or
const getRandomDemon = async () => {
  const demon = await new Demon().random({ list: 'main' })
  console.log(demon.name, demon.position)
  // random demon from main list
}
```

Some functionalities are missing, they will be added soon.
