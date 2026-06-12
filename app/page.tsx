"use client";

import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { usePokemon } from "@/hooks/usePokemon";
import PokemonCard from "@/components/PokemonCard";
import { usePokemonByType } from "@/hooks/usePokemonByType";
import TypeFilter from "@/components/TypeFilter";
import { useFavorites } from "@/hooks/useFavorites";
import PokemonCardSkeleton from "@/components/PokemonCardSkeleton";

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [showFavorites, setShowFavorites] = useState(false);

  const { favorites } = useFavorites();

  const { data, isLoading, error } = usePokemon(page);
  const { data: typeData } = usePokemonByType(selectedType);

  const allPokemon =
    selectedType === "all"
      ? data?.results || []
      : typeData?.map((p: any) => ({
          name: p.pokemon.name,
        })) || [];

  const filteredPokemon = allPokemon.filter((pokemon: { name: string }) => {
    const matchesSearch = pokemon.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFavorite = !showFavorites || favorites.includes(pokemon.name);

    return matchesSearch && matchesFavorite;
  });
  const ITEMS_PER_PAGE = 20;

  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedPokemon =
    selectedType === "all"
      ? filteredPokemon
      : filteredPokemon.slice(startIndex, endIndex);

  const totalPages =
    selectedType === "all"
      ? 100
      : Math.max(1, Math.ceil(filteredPokemon.length / ITEMS_PER_PAGE));
  useEffect(() => {
    setPage(1);
  }, [selectedType, search, showFavorites]);
  if (isLoading) {
    return (
      <main className="min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {Array.from({
              length: 20,
            }).map((_, i) => (
              <PokemonCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-red-500 text-center">Error loading Pokemon</div>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">Pokedex Lite</h1>

          <p className="text-muted-foreground mt-2 text-lg">
            Search, filter and explore Pokemon
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Showing {paginatedPokemon.length} Pokemon
          </p>
        </div>

        <SearchBar search={search} setSearch={setSearch} />

        <TypeFilter
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className="mb-6 rounded-lg border px-4 py-2 hover:bg-slate-100 transition"
        >
          {showFavorites ? "Show All" : "Show Favorites"}
        </button>

        {filteredPokemon.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-6xl mb-4">🔍</div>

            <h2 className="text-2xl font-bold">No Pokemon Found</h2>

            <p className="text-muted-foreground mt-2">
              Try another search term or filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {paginatedPokemon.map(
              (
                pokemon: {
                  name: string;
                },
                index: number,
              ) => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    startIndex + index + 1
                  }.png`}
                />
              ),
            )}
          </div>
        )}

        <div className="flex justify-center gap-4 mt-10">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </Button>

          <div className="flex items-center font-semibold">
            Page {page} of {totalPages}
          </div>

          <Button
            disabled={selectedType !== "all" && page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>

      <footer className="mt-16 py-6 text-center text-sm text-muted-foreground">
        Built with Next.js, TypeScript, Tailwind CSS and PokeAPI
      </footer>
    </main>
  );
}
