import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { motion } from 'framer-motion';
import { useAllocations } from '@/hooks/useAllocations';

const DonutChart: React.FC = () => {
  const { data, isLoading, isError } = useAllocations();

  if (isLoading) return <div className="text-center py-8">Loading…</div>;
  if (isError || !data) return <div className="text-center py-8 text-red-600">Error loading allocations</div>;

  const options: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: '' },
    plotOptions: {
      pie: {
        innerSize: '60%',
        dataLabels: { enabled: false },
        states: { hover: { enabled: true, brightness: 0.1 } },
      },
    },
    series: [{
      type: 'pie',
      name: 'Allocation',
      data: data.map(item => [item.ticker, item.weight]),
    }],
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-lg"
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </motion.div>
  );
};

export default DonutChart; 