export interface Player {
  banned: boolean;
  id: number;
  name: string;
}

interface Nationality {
  country_code: string
  nation: string
}

export interface Records {
  id: number;
  nationality: Nationality
  player: Player;
  progress: number;
  status: string;
  video: string;
}

interface FullDemon {
  data: MinimalDemon & {
    creators: Player[];
    records: Records[];
  }
}

interface MinimalDemon {
  id: number;
  position: number;
  name: string;
  requeriment: number;
  video: string;
  publisher: Player;
  verifier: Player;
  level_id: number;
}

export { FullDemon, MinimalDemon };