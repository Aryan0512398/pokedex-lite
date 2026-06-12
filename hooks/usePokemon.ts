"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/lib/api";

export function usePokemon(page: number) {
  const limit = 20;

  return useQuery({
    queryKey: ["pokemon", page],
    queryFn: () => getPokemonList(limit, (page - 1) * limit),
  });
}
