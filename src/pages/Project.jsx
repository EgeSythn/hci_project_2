import {
  AppShell,
  useMantineTheme,
  Header,
  Container,
  Title,
  Center,
  Box,
} from "@mantine/core";
import AppHeader from "../components/AppHeader.jsx";
import AppFooter from "../components/AppFooter.jsx";
import InfoCard from "../components/InfoCard.jsx";

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
        <Header height={100} p="xs">
          <AppHeader />
        </Header>
      }
      footer={<AppFooter />}
    >
      {/* Section 1*/}
      <InfoCard top={7.5} bottom={5} />
      <InfoCard top={2.5} bottom={5} />
      <InfoCard top={2.5} bottom={7.5} />
    </AppShell>
  );
}

export default Project;
