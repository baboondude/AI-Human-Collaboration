import * as React from 'react';
import Plot from 'react-plotly.js';
import { useAllocations } from "@/hooks/useAllocations";

export function DonutAllocation() {
  const { data, isLoading, error } = useAllocations();
  
  if (isLoading) return <p className="text-center">Loading…</p>;
  if (error || !data) return <p className="text-center text-red-600">Error loading allocations.</p>;
  
  const labels = data.map(item => item.ticker);
  const values = data.map(item => item.weight);

  return (
    <div className="w-full max-w-md">
      <Plot
        data={[
          {
            type: 'pie',
            labels,
            values,
            hole: 0.6,
            textinfo: 'label+percent',
          },
        ]}
        layout={{
          title: 'Target Allocation',
          paper_bgcolor: 'rgba(0,0,0,0)',
          font: { color: '#f9fafb' },
        }}
        config={{ displayModeBar: false }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
} 