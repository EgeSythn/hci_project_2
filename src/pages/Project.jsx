import { AppShell, useMantineTheme, Header, Title } from "@mantine/core";
import InfoCard from "../components/InfoCard.jsx";
import AppHeader from "../components/AppHeader.jsx";
import AppFooter from "../components/AppFooter.jsx";
import Conclusion from "../components/Conclusion.jsx";
import DividerImage from "../components/DividerImage.jsx";
import Introduction from "../components/Introduction.jsx";
import RadBarChart from "../charts/RadBarChart";

const data1 = [
  { name: "Poland", USD: 597, fill: "#E57373" },
  { name: "Saudi Arabia", USD: 700, fill: "#BA68C8" },
  { name: "Turkey", USD: 720, fill: "#7986CB" },
  { name: "Switzerland", USD: 752, fill: "#4FC3F7" },
  { name: "Netherlands", USD: 914, fill: "#4DB6AC" },
  { name: "Indonesia", USD: 1058, fill: "#AED581" },
  { name: "Mexico", USD: 1074, fill: "#00897B" },
  { name: "Spain", USD: 1281, fill: "#7CB342" },
  { name: "Australia", USD: 1328, fill: "#C0CA33" },
  { name: "Brazil", USD: 1445, fill: "#FFF176" },
  { name: "Top Ten Billionaires", USD: 1447.6, fill: "#FFB74D" },
];

const style1 = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

function Project() {
  const theme = useMantineTheme();

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
