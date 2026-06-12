export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonDetails extends Pokemon {
  height: number;
  weight: number;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
}