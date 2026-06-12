"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { useFavorites } from "@/hooks/useFavorites";
import { typeColors } from "@/lib/typeColors";
import { useState } from "react";
import PokemonModal from "./PokemonModal";
import { motion } from "framer-motion";

interface PokemonCardProps {
  name: string;
  image: string;
}

export default function PokemonCard({ name, image }: PokemonCardProps) {
  const { data } = usePokemonDetails(name);

  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(name);

  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        onClick={() => setOpen(true)}
        className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-4"
      >
        <div className="flex justify-end">
          <Heart
            size={20}
            fill={isFavorite ? "currentColor" : "none"}
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(name);
            }}
            className={`cursor-pointer transition-colors ${
              isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-500"
            }`}
          />
        </div>

        <div className="flex justify-center">
          <Image
            src={
              data?.sprites?.other?.["official-artwork"]?.front_default || image
            }
            alt={name}
            width={120}
            height={120}
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <h2 className="text-center font-semibold text-lg capitalize mt-3">
          {name}
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {data?.types?.map((type: any) => (
            <Badge key={type.type.name} className={typeColors[type.type.name]}>
              {type.type.name}
            </Badge>
          ))}
        </div>
      </Card>

      <PokemonModal open={open} onOpenChange={setOpen} pokemon={data} />
    </motion.div>
  );
}
