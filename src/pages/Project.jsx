import { AppShell, useMantineTheme, Header, Text, Title } from "@mantine/core";
import AppHeader from "../components/AppHeader.jsx";
import AppFooter from "../components/AppFooter.jsx";
import InfoCard from "../components/InfoCard.jsx";
import DividerImage from "../components/DividerImage.jsx";
import { faker } from "@faker-js/faker";

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
      <Title
        order={2}
        style={{
          paddingLeft: `2.5%`,
          paddingTop: `7.5%`,
          fontFamily: "sans-serif",
        }}
      >
        What is this Project About?
      </Title>
      <Text
        style={{
          paddingTop: "2.5%",
          paddingBottom: "2.5%",
          paddingLeft: "5%",
          paddingRight: "5%",
          fontFamily: "sans-serif",
        }}
      >
        &emsp; &emsp;{faker.lorem.paragraphs()}
      </Text>
      <Text
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          fontFamily: "sans-serif",
        }}
      >
        &emsp; &emsp;{faker.lorem.paragraphs()}
      </Text>

      {/* Data Visualizations */}
      <DividerImage alt="separator 2" size={50} />

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

      <DividerImage alt="separator 2" size={50} />

      {/* Conclusion & Remarks */}
      <Title
        order={2}
        style={{
          paddingLeft: `2.5%`,
          paddingTop: `2.5%`,
          fontFamily: "sans-serif",
        }}
      >
        Final Remarks and Conclusion
      </Title>
      <Text
        style={{
          paddingTop: "2.5%",
          paddingBottom: "2.5%",
          paddingLeft: "5%",
          paddingRight: "5%",
          fontFamily: "sans-serif",
        }}
      >
        &emsp; &emsp;{faker.lorem.paragraphs()}
      </Text>
      <Text
        style={{
          paddingBottom: "5%",
          paddingLeft: "5%",
          paddingRight: "5%",
          fontFamily: "sans-serif",
        }}
      >
        &emsp; &emsp;{faker.lorem.paragraphs()}
      </Text>
    </AppShell>
  );
}

export default Project;
