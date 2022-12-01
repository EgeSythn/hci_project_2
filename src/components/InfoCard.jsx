import { Title, Center, Box, Text } from "@mantine/core";
import { faker } from "@faker-js/faker";

function InfoCard(props) {
  const { top, bottom } = props;
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
        __TOPIC NAME__
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
          <Center style={{ paddingTop: "8%", paddingBottom: "4%" }}>
            __GRAPH__
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
