import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonCardSkeleton() {
  return (
    <Card className="p-4">
      <div className="flex justify-end">
        <Skeleton className="h-5 w-5 rounded-full" />
      </div>

      <div className="flex justify-center mt-2">
        <Skeleton className="h-28 w-28 rounded-full" />
      </div>

      <div className="mt-4 flex justify-center">
        <Skeleton className="h-5 w-24" />
      </div>

      <div className="flex gap-2 justify-center mt-4">
        <Skeleton className="h-5 w-14" />
        <Skeleton className="h-5 w-14" />
      </div>
    </Card>
  );
}
