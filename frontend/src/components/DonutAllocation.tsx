import React from 'react';
import Plot from 'react-plotly.js';

export function DonutAllocation() {
  const labels = ['Equities', 'Bonds', 'Real Estate', 'Commodities', 'Cash'];
  const values = [40, 25, 15, 10, 10]; // TODO: dynamic

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
          title: 'Target Allocation (Mock)',
          paper_bgcolor: 'rgba(0,0,0,0)',
          font: { color: '#f9fafb' },
        }}
        config={{ displayModeBar: false }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
} 