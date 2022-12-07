import { Center, Text, Flex, Stack, Checkbox, Container } from "@mantine/core";
import { IconX } from "@tabler/icons";
import { useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  Tooltip,
  ResponsiveContainer,
  Label,
  LabelList,
} from "recharts";

function RadBarChart(props) {
  const { data } = props;
  const [currData, setCurrData] = useState([
    data.find((item) => item.name === "Brazil"),
    data.find((item) => item.name === "Top Ten Billionaires"),
  ]);

  const handleOnClick = (currItem, index, event) => {
    if (!event.target.checked) {
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
          <Text fw={700}>&emsp;$ {val.USD} Billion&emsp;</Text>
        </Center>
      </div>
    );
  };

  const component = (
    <Stack>
      <Center>
        <Text fw={500} size={12}>
          Choose to add or remove values to the chart
        </Text>
      </Center>
      <Container style={{ width: 800 }}>
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
                defaultChecked={
                  item.name === "Brazil" || item.name === "Top Ten Billionaires"
                }
                onClick={(event) => {
                  handleOnClick(item, index, event);
                }}
              />
            );
          })}
        </Flex>
      </Container>
      {currData.length > 0 ? (
        <ResponsiveContainer width="100%" height={700}>
          <RadialBarChart
            data={currData.sort((a, b) => a.USD - b.USD)}
            startAngle={95}
            endAngle={-155}
            barSize={50}
            innerRadius="30%"
            outerRadius="100%"
          >
            <RadialBar
              isAnimationActive={true}
              minAngle={30}
              name="name"
              dataKey="USD"
              clockWise
              onMouseOver={() => (tooltip = "USD")}
            >
              <LabelList position="insideStart" dataKey="name" fill="#000" />
              <LabelList dataKey="USD" fill="#000" position="insideEnd" />
            </RadialBar>
            <Tooltip content={<CustomTooltip />} />
          </RadialBarChart>
        </ResponsiveContainer>
      ) : (
        <Center>
          <Text style={{ paddingTop: "10%" }} fw={700} size={20}>
            No Data Category Chosen
          </Text>
        </Center>
      )}
    </Stack>
  );

  return <>{component}</>;
}

export default RadBarChart;
