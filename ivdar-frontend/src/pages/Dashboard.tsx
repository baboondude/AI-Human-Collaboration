import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options: Highcharts.Options = {
  title: { text: 'Sample Allocation Growth' },
  xAxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  series: [
    { type: 'line', name: 'Portfolio', data: [100, 115, 130, 150, 165] },
  ],
};

export default function Dashboard() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-bold">Portfolio Allocation</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
} 