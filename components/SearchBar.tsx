"use client";

import { Input } from "@/components/ui/input";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <Input
      placeholder="Search Pokemon..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-8"
    />
  );
}
