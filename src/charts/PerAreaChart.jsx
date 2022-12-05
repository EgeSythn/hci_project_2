import { Center, Flex, MultiSelect, Select, Stack, Text } from "@mantine/core";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

const colorPallette = [
  "#F4D03F",
  "#45B39D",
  "#EC7063",
  "#3498DB",
  "#A569BD",
  "#E67E22 ",
];

const names = ["White", "Black", "Hispanic", "Asian", "AIAN", "NHOPI"];

function PerAreaChart(props) {
  const { data, data2 } = props;
  const [currData, setCurrData] = useState([data[0], data[1]]);
  const [currData2, setCurrData2] = useState(data2[0], data2[1]);

  const handleOnChange = (event) => {
    console.log(event);
    let tempArr = [];
    let tempArr2 = [];
    event.forEach((item) => {
      tempArr.push(data.find((dat) => dat.name === item));
      tempArr2.push(data2.find((dat) => dat.name === item));
    });
    setCurrData(tempArr);
    setCurrData2(tempArr2);
  };

  const toPercent = (decimal) => `${(decimal * 100).toFixed(0)}%`;

  const getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio);
  };

  const renderTooltipContent = (o) => {
    const { payload, label } = o;
    const total = payload.reduce((result, entry) => result + entry.value, 0);
    return (
      <div
        className="customized-tooltip-content"
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          backgroundColor: "whitesmoke",
        }}
      >
        <p
          className="total"
          style={{
            fontWeight: "bolder",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >{`${label} (Total: ${total})`}</p>
        <hr />
        <ul className="list">
          {payload.map((entry, index) => (
            <li
              key={`item-${index}`}
              style={{ color: entry.color, fontWeight: "bolder" }}
            >
              {`${entry.name}: ${getPercent(entry.value, total)}`}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const CustomizedXAxisTick = (o) => {
    const { x, y, payload } = o;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={10}
          y={0}
          dy={16}
          dx={5}
          textAnchor="end"
          fill="#666"
          transform="rotate(0)"
        >
          {payload.value}
        </text>
      </g>
    );
  };
  const CustomizedYAxisTick = (o) => {
    const { x, y, payload } = o;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={-10}
          y={-10}
          dy={16}
          dx={5}
          textAnchor="end"
          fill="#666"
          transform="rotate(0)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <Stack style={{ paddingTop: "5%" }}>
      <Center>
        <MultiSelect
          label="Community"
          placeholder="Choose a state"
          defaultValue={[names[0], names[1]]}
          nothingFound="Couldn't find state"
          data={names}
          onChange={handleOnChange}
        />
      </Center>
      <Flex
        mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Stack>
          <AreaChart
            width={500}
            height={500}
            data={currData}
            stackOffset="expand"
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={<CustomizedXAxisTick />} />
            <YAxis tickFormatter={toPercent} tick={<CustomizedYAxisTick />} />
            <Tooltip content={renderTooltipContent} />
            <Area
              type="monotone"
              dataKey="Uninsured"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Medicaid / Other Public"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Private"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
            <Legend layout="horizontal" verticalAlign="top" align="center" />
          </AreaChart>
          <Text fw={500} size={10}>
            * AIAN refers to American Indians and Alaska Natives
          </Text>
          <Text fw={500} size={10}>
            * NHOPI refers to Native Hawaiians and Other Pacific Islanders
          </Text>
        </Stack>
        <Stack style={{ paddingTop: "5%" }}>
          <AreaChart
            width={500}
            height={500}
            data={data}
            stackOffset="expand"
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={<CustomizedXAxisTick />} />
            <YAxis tickFormatter={toPercent} />
            <Tooltip content={renderTooltipContent} />
            <Area
              type="monotone"
              dataKey="Uninsured"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Medicaid / Other Public"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Private"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
            <Legend layout="horizontal" verticalAlign="top" align="center" />
          </AreaChart>
          <Text fw={500} size={10}>
            * AIAN refers to American Indians and Alaska Natives
          </Text>
          <Text fw={500} size={10}>
            * NHOPI refers to Native Hawaiians and Other Pacific Islanders
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default PerAreaChart;
