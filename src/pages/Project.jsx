import {
  AppShell,
  Text,
  Center,
  useMantineTheme,
  Header,
  Title,
  Flex,
} from "@mantine/core";
import DividerImage from "../components/DividerImage.jsx";
import Introduction from "../components/Introduction.jsx";
import Conclusion from "../components/Conclusion.jsx";
import AppFooter from "../components/AppFooter.jsx";
import AppHeader from "../components/AppHeader.jsx";
import InfoCard from "../components/InfoCard.jsx";
import RadBarChart from "../charts/RadBarChart";
import MapChart from "../charts/MapChart.jsx";
import { getData } from "../data/data.js";
import { useState } from "react";

function Project() {
  const theme = useMantineTheme();
  const [mapContent, setMapContent] = useState([]);
  const data1 = getData().billionaire_country_wealth;
  const data2 = getData().insulin_legend;

  return (
    <AppShell
      padding="md"
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header
          height={100}
          p="xs"
          style={{
            backgroundColor: `${theme.colors.gray[0]}`,
          }}
          withBorder={false}
        >
          <AppHeader />
        </Header>
      }
      footer={<AppFooter />}
    >
      {/* Introduction */}
      <Introduction />

      {/* Data Visualizations */}
      <Title
        order={2}
        style={{
          paddingLeft: `2.5%`,
          paddingTop: "7.5%",
          fontFamily: "sans-serif",
        }}
      >
        Wealth & Health Inequality by Data
      </Title>
      <hr style={{ width: "95%" }} />

      {/* Section 1*/}
      <InfoCard
        helper={"render_with_box"}
        top={2.5}
        bottom={5}
        name={"Wealth Disparity & Hoarding"}
        graphTitle={"Country GDP's ($Billions)"}
        chart={<RadBarChart data={data1} />}
      />
      <DividerImage alt="separator 2" size={50} />

      {/* Section 2*/}
      <InfoCard
        helper={"render_without_box"}
        top={0}
        bottom={5}
        name={"Health Accessibility"}
        graphTitle={"Insulin Prices Across the World ($USD)"}
        chart={undefined}
      />
      <Flex
        style={{ paddingTop: "2.5%" }}
        mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Text>Low</Text>
        <Center
          sx={(theme) => ({
            height: 40,
            backgroundImage: theme.fn.gradient({
              from: "#2874A6",
              to: "#B03A2E",
              deg: 45,
            }),
            width: "70%",
          })}
        />
        <Text>High</Text>
      </Flex>
      <MapChart mapContent={mapContent} setTooltipContent={setMapContent} />

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
          &emsp; &emsp;This is an example paragraph to prevent the graph from
          moving in place. The faker data, since it changes during each
          rerender, moves the graph due to the changes in length, which is not
          great!
        </Text>
      </Center>
      <DividerImage alt="separator 3" size={50} />

      {/* Section 3*/}
      <InfoCard top={2.5} bottom={5} />
      <DividerImage alt="separator 4" size={50} />

      {/* Section 3*/}
      <InfoCard top={2.5} bottom={5} />
      {/* Conclusion & Remarks */}
      <Conclusion />
    </AppShell>
  );
}

export default Project;
