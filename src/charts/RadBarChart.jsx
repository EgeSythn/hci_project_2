import { Center, Text, Flex, Stack, Checkbox } from "@mantine/core";
import { IconX } from "@tabler/icons";
import { useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function RadBarChart(props) {
  const { data } = props;
  const [currData, setCurrData] = useState(data);

  const handleOnClick = (currItem, index, event) => {
    if (event.target.checked) {
      setCurrData(currData.filter((item) => item.name !== currItem.name));
    } else {
      var newArray = [];
      data.forEach((element) => {
        if (element.name === data[index].name) {
          newArray.push(element);
        } else if (currData.find((item) => item.name === element.name)) {
          newArray.push(element);
        }
      });
      setCurrData(newArray);
    }
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
          <Text fw={700}>&emsp;{val.name}&emsp;</Text>
        </Center>
        <Center>
          <Text fw={700}>&emsp;$ {val.USD}&emsp;</Text>
        </Center>
      </div>
    );
  };

  const component = (
    <Stack>
      <ResponsiveContainer width="100%" height={700}>
        <RadialBarChart
          data={currData.sort((a, b) => a.USD - b.USD)}
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
            name="name"
            dataKey="USD"
            clockWise
            onMouseOver={() => (tooltip = "USD")}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadialBarChart>
      </ResponsiveContainer>
      <Center>
        <Text fw={500} size={12}>
          Choose to remove or re-add values to the chart
        </Text>
      </Center>
      <Flex
        mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        {data.map((item, index) => {
          return (
            <Checkbox
              key={index}
              icon={IconX}
              label={
                <Text fw={700} size={17.5} color={item.fill}>
                  {item.name}
                </Text>
              }
              color={`${item.fill}`}
              onClick={(event) => {
                handleOnClick(item, index, event);
              }}
            />
          );
        })}
      </Flex>
    </Stack>
  );

  return <>{component}</>;
}

export default RadBarChart;
