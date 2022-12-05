import { Title, Center, Box, Text } from "@mantine/core";

function InfoCard(props) {
  const {
    helper,
    top,
    bottom,
    name,
    graphTitle,
    chart,
    introduction,
    discussion,
  } = props;
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
        {name}
      </Title>
      <Text
        style={{
          paddingBottom: "2.5%",
          paddingLeft: "10%",
          paddingRight: "5%",
          fontFamily: "sans-serif",
        }}
      >
        &emsp; &emsp;{introduction}
      </Text>
      {helper === "render_with_box" ? (
        <>
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
              <Title order={3}>{graphTitle}</Title>
              <Center style={{ paddingTop: "2%", paddingBottom: "4%" }}>
                {chart}
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
              &emsp; &emsp;{discussion}
            </Text>
          </Center>
        </>
      ) : (
        <>
          <Center style={{ paddingTop: "2.5%" }}>
            <Title order={3}>{graphTitle}</Title>
          </Center>
        </>
      )}
    </>
  );
}

export default InfoCard;
