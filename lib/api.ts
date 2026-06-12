import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit: number, offset: number) => {
  const response = await axios.get(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );

  return response.data;
};

export const getPokemonDetails = async (name: string) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${name}`);

  return response.data;
};

export const getPokemonTypes = async () => {
  const response = await axios.get(`${BASE_URL}/type`);

  return response.data.results;
};
export const getPokemonByType = async (type: string) => {
  const response = await axios.get(`${BASE_URL}/type/${type}`);

  return response.data.pokemon;
};
