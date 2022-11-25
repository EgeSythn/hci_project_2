import {
  AppShell,
  BackgroundImage,
  Container,
  Header,
  Title,
  Text,
  Center,
  Box,
} from "@mantine/core";
import headerBackground from "./assets/headerbackground.png";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Container>
      <Header
        style={{
          width: "400%",
          marginTop: "-1%",
          marginLeft: "-150%",
          marginRight: "-150%",
        }}
      >
        <BackgroundImage src={headerBackground} radius="md">
          <Center>
            <Title
              order={1}
              style={{
                paddingTop: "2%",
                paddingBottom: "2%",
                paddingLeft: "10%",
                paddingRight: "10%",
                color: "white",
              }}
              size={50}
            >
              Wealth & Health Inequality
            </Title>
          </Center>
        </BackgroundImage>
      </Header>
      {/* Section 1 */}
      <Container style={{ marginTop: "5%" }}>
        <Title order={2} style={{ marginBottom: "2.5%" }}>
          __TOPIC NAME__
        </Title>
        <Box
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
          <Center>__GRAPH__</Center>
        </Box>
      </Container>
      {/* Section 2 */}
      <Container style={{ marginTop: "5%" }}>
        <Title order={2} style={{ marginBottom: "2.5%" }}>
          __TOPIC NAME__
        </Title>
        <Box
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
          <Center>__GRAPH__</Center>
        </Box>
      </Container>
      {/* Section 3 */}
      <Container style={{ marginTop: "5%" }}>
        <Title order={2} style={{ marginBottom: "2.5%" }}>
          __TOPIC NAME__
        </Title>
        <Box
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
          <Center>__GRAPH__</Center>
        </Box>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
