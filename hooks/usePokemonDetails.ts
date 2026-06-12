"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "@/lib/api";

export function usePokemonDetails(name: string) {
  return useQuery({
    queryKey: ["pokemon-detail", name],
    queryFn: () => getPokemonDetails(name),
  });
}
