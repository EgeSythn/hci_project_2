import { Select, Stack, Title, Center, Text, Divider } from "@mantine/core";
import { useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Label,
  Bar,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const colorPallette = ["#F4D03F", "#45B39D", "#EC7063", "#3498DB"];

function RegBarChart(props) {
  const { data } = props;
  const [currPopData, setCurrPopData] = useState(data[0].populations);
  const [currCaseData, setCurrCaseData] = useState(data[0].cases);
  const [currDeathData, setCurrDeathData] = useState(data[0].deaths);

  const state_names = data.map((item) => {
    return { value: item.name, label: item.name };
  });

  const handleOnChange = (event) => {
    setCurrPopData(data.find((item) => item.name === event).populations);
    setCurrCaseData(data.find((item) => item.name === event).cases);
    setCurrDeathData(data.find((item) => item.name === event).deaths);
  };

  var tooltip;
  const CustomTooltip = ({ active, payload }) => {
    if (!active || !tooltip) return null;
    const val = payload[0].payload;
    return (
      <div
        style={{ width: "20", border: "1px solid black", borderRadius: "5px" }}
      >
        <Center>
          <Text fw={700}>
            &emsp;Number of People: {val.value.toLocaleString(undefined)}
            &emsp;
          </Text>
        </Center>
      </div>
    );
  };

  return (
    <Stack>
      <Select
        label="State"
        placeholder="Choose a state"
        defaultValue={state_names[0].label}
        data={state_names}
        onChange={handleOnChange}
      />

      {/* POP DATA */}
      <Title
        order={5}
        style={{
          paddingTop: `2.5%`,
          paddingBottom: `2.5%`,
          fontFamily: "sans-serif",
        }}
      >
        Populations
      </Title>
      <BarChart data={currPopData} width={600} height={200} layout="vertical">
        <XAxis hide axisLine={false} type="number" />
        <YAxis
          dataKey="name"
          fontSize={13}
          type="category"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          orientation="right"
          dataKey="value"
          type="category"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => value.toLocaleString()}
          mirror
        />
        <Bar
          dataKey="value"
          minPointSize={2}
          barSize={32}
          onMouseEnter={() => (tooltip = "Number of People")}
        >
          {data.map((d, idx) => {
            return <Cell key={d["name"]} fill={colorPallette[idx]} />;
          })}
        </Bar>
        <Tooltip cursor={false} content={<CustomTooltip />} />
      </BarChart>
      {currPopData.find(
        (item) => item.value === "No Confirmed Data in Category"
      ) ? (
        <Text fw={500} size={12}>
          * No Confirmed Data for Some Categories
        </Text>
      ) : (
        <></>
      )}

      <Divider />
      {/* CASE DATA */}
      <Title
        order={5}
        style={{
          paddingTop: `2.5%`,
          paddingBottom: `2.5%`,
          fontFamily: "sans-serif",
        }}
      >
        Cases
      </Title>
      <BarChart data={currCaseData} width={600} height={200} layout="vertical">
        <XAxis hide axisLine={false} type="number" />
        <YAxis
          dataKey="name"
          type="category"
          fontSize={13}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          orientation="right"
          dataKey="value"
          type="category"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => value.toLocaleString()}
          mirror
        />
        <Bar dataKey="value" minPointSize={2} barSize={32}>
          {data.map((d, idx) => {
            return <Cell key={d["name"]} fill={colorPallette[idx]} />;
          })}
        </Bar>
        <Tooltip cursor={false} content={<CustomTooltip />} />
      </BarChart>
      {currCaseData.find(
        (item) => item.value === "No Confirmed Data in Category"
      ) ? (
        <Text fw={500} size={12}>
          * No Confirmed Data for Some Categories
        </Text>
      ) : (
        <></>
      )}

      <Divider />

      {/* DEATH DATA */}
      <Title
        order={5}
        style={{
          paddingTop: `2.5%`,
          paddingBottom: `2.5%`,
          fontFamily: "sans-serif",
        }}
      >
        Death
      </Title>
      <BarChart data={currDeathData} width={600} height={200} layout="vertical">
        <XAxis hide axisLine={false} type="number" />
        <YAxis
          dataKey="name"
          type="category"
          fontSize={13}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          orientation="right"
          dataKey="value"
          type="category"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => value.toLocaleString()}
          mirror
        />
        <Bar dataKey="value" minPointSize={2} barSize={32}>
          {data.map((d, idx) => {
            return <Cell key={d["name"]} fill={colorPallette[idx]} />;
          })}
        </Bar>
        <Tooltip cursor={false} content={<CustomTooltip />} />
      </BarChart>
      {currDeathData.find(
        (item) => item.value === "No Confirmed Data in Category"
      ) ? (
        <Text fw={500} size={12}>
          * No Confirmed Data for Some Categories
        </Text>
      ) : (
        <></>
      )}
    </Stack>
  );
}

export default RegBarChart;
