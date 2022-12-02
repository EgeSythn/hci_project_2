import { AppShell, useMantineTheme, Header, Title } from "@mantine/core";
import DividerImage from "../components/DividerImage.jsx";
import Introduction from "../components/Introduction.jsx";
import Conclusion from "../components/Conclusion.jsx";
import AppFooter from "../components/AppFooter.jsx";
import AppHeader from "../components/AppHeader.jsx";
import InfoCard from "../components/InfoCard.jsx";
import RadBarChart from "../charts/RadBarChart";
import { getData } from "../data/data.js";

function Project() {
  const theme = useMantineTheme();
  const data1 = getData().billionaire_country_wealth;

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
      <InfoCard top={2.5} bottom={5} chart={<RadBarChart data={data1} />} />
      <DividerImage alt="separator 2" size={50} />

      {/* Section 2*/}
      <InfoCard top={2.5} bottom={5} />
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
