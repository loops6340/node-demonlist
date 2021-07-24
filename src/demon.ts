import axios, { AxiosResponse } from "axios";
import { FullDemon, MinimalDemon } from "./api-response";

 const random = (min: number, max: number) => Math.round(Math.random() * (max - min)) + min;

interface RandomDemonOptions {
  list?: "main" | "extended";
  after?: number;
  limit?: number;
}

class PointerCrate {
  protected apiURL = `https://pointercrate.com/api/v1`
}

export class Demon extends PointerCrate {

  async getByPosition(position: number) {
    const demon: AxiosResponse<FullDemon> = await axios(
      `${this.apiURL}/demons/${position}`
    );
    return demon.data.data;
  } 

  async getByName(name: string) {
    const res: AxiosResponse<MinimalDemon[]> = await axios(`${this.apiURL}/demons/?name_contains=${name}`)
    if (!res) throw new Error("this demon does not exist")
    const demonPosition = res.data[0].position;
    return this.getByPosition(demonPosition);
  };

  async random({ list, limit, after }: RandomDemonOptions) {
    const availableLists = ['main', 'extended'];
    if (list) {
      const randomMainList = Math.round(Math.random() * 75);
      if(!availableLists.some(aList => aList === list)) throw new Error("incorrect list");
      return list === "main" ? this.getByPosition(randomMainList) : this.getByPosition(random(76, 150));
    } else if(limit) {
      return after ? this.getByPosition(random(after + 1, limit)) : this.getByPosition(random(0, limit));
    } else {
      throw new Error("Invalid option")
    }
  }
};
/**
 * @deprecated use instead class Demon()
 * @example
 * import { Demon } from "demonlist";
 * 
 * const sonicWave = new Demon().getByName("sonic wave");
 * sonicWave.then(s => console.log(s.position))
 *  
 */
export const demons = new Demon()
