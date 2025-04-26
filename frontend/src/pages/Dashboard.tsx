import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "@highcharts/react-official";

export default function Dashboard() {
  const [data, setData] = useState<{ name: string; y: number }[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/snapshot")
      .then((res) => res.json())
      .then((d) =>
        setData([
          { name: "Equities", y: d.equities },
          { name: "Bonds", y: d.bonds },
          { name: "Intl", y: d.intl },
          { name: "Cash", y: d.cash },
        ])
      );
  }, []);

  if (!data) return <p className="p-6">Loading…</p>;

  return (
    <div className="p-6">
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: { type: "variablepie" },
          title: { text: "Target Allocation" },
          series: [{ type: "variablepie", data }],
        }}
      />
    </div>
  );
} 