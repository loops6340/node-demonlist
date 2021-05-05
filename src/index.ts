
//se me ocurrio poner esto por separado cuando hice la ruleta
import axios, { AxiosResponse } from 'axios'
import { DemonResultsSimplified, DemonResultsByPosition } from './api-response'

const apiURL = "https://pointercrate.com/api/v1"

async function getDemonByPosition(position: number):Promise<DemonResultsByPosition['data']> {
  const getDemon: AxiosResponse<DemonResultsByPosition> = await axios(`${apiURL}/demons/${position}`)
  return getDemon.data.data
}

async function getDemonByName(name: string):Promise<DemonResultsByPosition['data']> {
  const makeRequest = async (url:string):Promise<DemonResultsByPosition['data']> => {
      const res: AxiosResponse<DemonResultsSimplified[]> = await axios(url)
      const findDemon = res.data.find((demon) => demon.name.toLowerCase() === name)
      const demonPosition = findDemon?.position!
      return getDemonByPosition(demonPosition)
  }

  try {
    console.log('searching among the top 100 demons')
    return await makeRequest(`${apiURL}/demons/?limit=100`)
  } catch {
    console.log('searching among the top 101-200 demons')
    return await makeRequest(`${apiURL}/demons/?after=100&limit=100`)
  }
}

interface RandomDemonOptions {
  list?: "main" | "extended"
  after?: number;
  limit?: number; 
}

async function randomDemon(options:RandomDemonOptions):Promise<DemonResultsByPosition['data']> {
  const random = (min:number, max:number) => Math.round(Math.random() * (max - min)) + min;
  if(options.list === "main") {
    return getDemonByPosition(Math.round(Math.random() * 75))
  } else if (options.list === "extended") {
    return getDemonByPosition(random(76, 150))
  } else if (options.after && options.limit) {
    return getDemonByPosition(random(options.after + 1 , options.limit))
  } else {
    throw new Error("option not specified");
  }
}

export { getDemonByPosition, getDemonByName, randomDemon }


