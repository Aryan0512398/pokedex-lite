"use client";

import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");

    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const toggleFavorite = (name: string) => {
    const updated = favorites.includes(name)
      ? favorites.filter((f) => f !== name)
      : [...favorites, name];

    setFavorites(updated);

    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return {
    favorites,
    toggleFavorite,
  };
}
