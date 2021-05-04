interface Creators {
  banned: boolean;
  id: number;
  name: string;
}

interface Publisher {
  banned: boolean;
  id: number;
  name: string;
}

interface Player {
  banned: boolean;
  id: number;
  name: string;
}

interface Records {
  id: number;
  player: Player;
  progress: number;
  status: string;
  video: string;
}

interface Verifier {
  banned: boolean;
  id: number;
  name: string;
}

interface DemonResultsByPosition {
  data: {
    creators: Creators[];
    id: number;
    level_id: number;
    name: string;
    position: number;
    publisher: Publisher;
    records: Records[];
    requeriment: number;
    verifier: Verifier;
    video: string;
  };
}

interface DemonResultsSimplified {
  id: number;
  position: number;
  name: string;
  requeriment: number;
  video: string;
  publisher: Publisher;
  verifier: Verifier;
  level_id: number;
}

export { DemonResultsByPosition, DemonResultsSimplified };