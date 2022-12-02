import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function RadBarChart(props) {
  const { data } = props;
  return (
    <ResponsiveContainer width="100%" height={700}>
      <RadialBarChart
        data={data}
        startAngle={270}
        endAngle={540}
        innerRadius="20%"
        outerRadius="70%"
      >
        <RadialBar
          isAnimationActive={true}
          minAngle={30}
          label={{
            fill: "#000",
            position: "insideStart",
            name: "name",
          }}
          dataKey="USD"
          clockWise
        />
        <Legend
          iconSize={25}
          iconType="circle"
          width="100%"
          layout="horizontal"
          verticalAlign="top"
          align="center"
        />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default RadBarChart;
