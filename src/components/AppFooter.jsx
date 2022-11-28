import { Text, Grid, useMantineTheme, Flex, Title } from "@mantine/core";

export function AppFooter() {
  const theme = useMantineTheme();
  return (
    <Flex
      mih={1}
      style={{
        borderTop: `2px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[2]
        }`,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Grid>
        <Grid.Col span={12}></Grid.Col>
        <Grid.Col>
          <Text
            fz="md"
            fw="700"
            color={"black"}
            style={{ fontFamily: "sans-serif" }}
            ta="center"
          >
            Introduction to Human-Computer Interaction Project 2 Group 4
            <Text fw={500}>Zike Hu</Text>
            <Text fw={500}>Sean O'Connor</Text>
            <Text fw={500}>Rohit Ganji</Text>
            <Text fw={500}>Ege Seyithanoglu</Text>
          </Text>
        </Grid.Col>
        <Grid.Col>
          <a
            href="https://www.flaticon.com/free-icons/accessibility"
            title="accessibility icons"
          >
            <Text
              fz="xs"
              color={"black"}
              style={{ fontFamily: "sans-serif" }}
              ta="center"
            >
              Accessibility icons created by Smashicons - Flaticon
            </Text>
          </a>
        </Grid.Col>
      </Grid>
    </Flex>
  );
}

export default AppFooter;
