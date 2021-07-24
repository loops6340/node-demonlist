// import { Demon } from "./demon"
// //you can get demon by position in the demonlist
// const getDemonCreators = async () => {
//   const demon = await demons.getByPosition(1)
//   return demon.creators
// }

// const getRandomDemon = async () => {
//   const demon = await demons.random({ after: 2, limit: 4 })
//   console.log(demon.name, demon.position)
//   // Zodiac or Kenos (3 or 4)
// }
// // or
// const getRandomDemonn = async () => {
//   const demon = await demons.random({ list: 'main' })
//   console.log(demon.name, demon.position)
//   // random demon from main list
// }

// getRandomDemon()
// getRandomDemonn()

import { Demon } from "./demon";

const getSonicWavePosition = async () => {
  const sonicWave = await new Demon().getByName("sonic wave")
  return sonicWave.position
}

getSonicWavePosition().then(console.log)


//let i:number;
let a = [1,2,3,4,5,6,7,8,9,10];

// const sonicWave = new Demon().getByName("sonic wave")

// sonicWave.then(e => console.log(e.name))

new Demon().getByName("ikaros").then(e => console.log(e.position, e.name))

const demon = new Demon().getByName("sonic wave").then(e => console.log(e.name))

for (const n of a) {
  const randomDemon = new Demon().random({ list: 'main' })
  randomDemon.then(d => console.log(d.name, d.position))
}
