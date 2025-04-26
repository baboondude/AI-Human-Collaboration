import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";

export interface Allocation {
  ticker: string;
  weight: number;
}

export function useAllocations() {
  return useQuery({
    queryKey: ["allocations"],
    queryFn: () => fetcher<Allocation[]>("/allocations"),
  });
} 