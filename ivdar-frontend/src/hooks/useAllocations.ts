import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Allocation {
  ticker: string;
  weight: number;
}

export const useAllocations = () => {
  return useQuery({
    queryKey: ['allocations'],
    queryFn: async () => {
      const { data } = await axios.get('/api/allocations');
      return data as Allocation[];
    }
  });
}; 