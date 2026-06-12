"use client";

import { Button } from "@/components/ui/button";

const TYPES = [
  "all",
  "grass",
  "fire",
  "water",
  "electric",
  "bug",
  "normal",
  "poison",
  "flying",
];

interface Props {
  selectedType: string;
  setSelectedType: (type: string) => void;
}

export default function TypeFilter({ selectedType, setSelectedType }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {TYPES.map((type) => (
        <Button
          key={type}
          variant={selectedType === type ? "default" : "outline"}
          onClick={() => setSelectedType(type)}
        >
          {type}
        </Button>
      ))}
    </div>
  );
}
