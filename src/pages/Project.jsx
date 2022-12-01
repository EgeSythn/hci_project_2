import { AppShell, useMantineTheme, Header, Title } from "@mantine/core";
import InfoCard from "../components/InfoCard.jsx";
import AppHeader from "../components/AppHeader.jsx";
import AppFooter from "../components/AppFooter.jsx";
import Conclusion from "../components/Conclusion.jsx";
import DividerImage from "../components/DividerImage.jsx";
import Introduction from "../components/Introduction.jsx";

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
      <DividerImage alt="separator 1" size={50} />

      {/* Data Visualizations */}
      <Title
        order={2}
        style={{
          paddingLeft: `2.5%`,
          fontFamily: "sans-serif",
        }}
      >
        Wealth & Health Inequality by Data
      </Title>

      {/* Section 1*/}
      <InfoCard top={2.5} bottom={5} />
      <DividerImage alt="separator 2" size={50} />

      {/* Section 2*/}
      <InfoCard top={2.5} bottom={5} />
      <DividerImage alt="separator 3" size={50} />

      {/* Section 3*/}
      <InfoCard top={2.5} bottom={5} />
      <DividerImage alt="separator 4" size={50} />

      {/* Section 3*/}
      <InfoCard top={2.5} bottom={5} />
      <DividerImage alt="separator 5" size={50} />

      {/* Conclusion & Remarks */}
      <Conclusion />
    </AppShell>
  );
}

export default Project;
