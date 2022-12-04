import { Title, Center, Box, Text } from "@mantine/core";

function InfoCard(props) {
  const { helper, top, bottom, name, graphTitle, chart } = props;
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
              &emsp; &emsp;It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
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
