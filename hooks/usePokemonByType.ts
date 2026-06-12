"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemonByType } from "@/lib/api";

export function usePokemonByType(type: string) {
  return useQuery({
    queryKey: ["pokemon-type", type],
    queryFn: () => getPokemonByType(type),
    enabled: type !== "all",
  });
}
