import Highcharts from "highcharts";
import HighchartsReact from "@highcharts/react-official";

export default function Dashboard() {
  const data = [
    { name: "Equities", y: 55 },
    { name: "Bonds", y: 25 },
    { name: "Intl", y: 15 },
    { name: "Cash", y: 5 },
  ];

  return (
    <div className="p-6">
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: { type: "variablepie" },
          title: { text: "Target Allocation (Sample)" },
          series: [{ type: "variablepie", data }],
        }}
      />
    </div>
  );
} 