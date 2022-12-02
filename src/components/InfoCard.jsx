import { Title, Center, Box, Text } from "@mantine/core";
import { faker } from "@faker-js/faker";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function InfoCard(props) {
  const { top, bottom, data } = props;
  return (
    <>
      <Title
        order={3}
        style={{
          paddingLeft: `7.5%`,
          paddingTop: `${top}%`,
          paddingBottom: `2.5%`,
          fontFamily: "sans-serif",
        }}
      >
        Wealth Hoarding
      </Title>
      <Center>
        <Box
          style={{
            paddingBottom: `${bottom}%`,
            width: "80%",
          }}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          <Title order={3}>Country GDP's ($Billions)</Title>
          <Center style={{ paddingTop: "8%", paddingBottom: "4%" }}>
            <ResponsiveContainer width="100%" height={1000}>
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
          </Center>
        </Box>
      </Center>
      <Title
        order={4}
        style={{
          paddingLeft: `12.5%`,
          paddingTop: `2.5%`,
          paddingBottom: `2.5%`,
          fontFamily: "sans-serif",
        }}
      >
        Discussion
      </Title>
      <Center>
        <Text
          style={{
            paddingBottom: `5%`,
            fontFamily: "sans-serif",
            width: "75%",
          }}
        >
          &emsp; &emsp;{faker.lorem.paragraphs()}
        </Text>
      </Center>
    </>
  );
}

export default InfoCard;
