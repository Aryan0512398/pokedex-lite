"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pokemon: any;
}

const typeColors: Record<string, string> = {
  grass: "bg-green-500",
  fire: "bg-orange-500",
  water: "bg-blue-500",
  electric: "bg-yellow-500 text-black",
  poison: "bg-purple-500",
  bug: "bg-lime-500 text-black",
  flying: "bg-sky-500",
  normal: "bg-gray-500",
  ground: "bg-amber-600",
  psychic: "bg-pink-500",
  rock: "bg-stone-500",
  ghost: "bg-violet-600",
  dragon: "bg-indigo-600",
  ice: "bg-cyan-400 text-black",
  fighting: "bg-red-600",
};

export default function PokemonModal({ open, onOpenChange, pokemon }: Props) {
  if (!pokemon) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto hide-scrollbar">
        <DialogHeader>
          <DialogTitle className="text-3xl capitalize text-center">
            {pokemon.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
                width={250}
                height={250}
                className="drop-shadow-xl"
              />
            </motion.div>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {pokemon.types.map((type: any) => (
                <Badge
                  key={type.type.name}
                  className={`capitalize ${
                    typeColors[type.type.name] || "bg-gray-500"
                  }`}
                >
                  {type.type.name}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 w-full">
              <div className="rounded-xl border p-4 text-center">
                <p className="text-sm text-muted-foreground">Height</p>
                <p className="text-xl font-bold">{pokemon.height}</p>
              </div>

              <div className="rounded-xl border p-4 text-center">
                <p className="text-sm text-muted-foreground">Weight</p>
                <p className="text-xl font-bold">{pokemon.weight}</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Abilities</h3>

              <div className="flex flex-wrap gap-2">
                {pokemon.abilities.map((ability: any) => (
                  <Badge
                    key={ability.ability.name}
                    variant="secondary"
                    className="capitalize"
                  >
                    {ability.ability.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Base Stats</h3>

              <div className="space-y-4">
                {pokemon.stats.map((stat: any) => (
                  <div key={stat.stat.name}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize text-sm">
                        {stat.stat.name}
                      </span>

                      <span className="font-semibold">{stat.base_stat}</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full transition-all"
                        style={{
                          width: `${Math.min(stat.base_stat, 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
