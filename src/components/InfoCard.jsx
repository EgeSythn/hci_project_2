import { Container, Title, Center, Box } from "@mantine/core";

function InfoCard(props) {
  const { top, bottom } = props;
  return (
    <>
      <Title
        order={2}
        style={{
          paddingLeft: `2.5%`,
          paddingTop: `${top}%`,
          paddingBottom: `5%`,
        }}
      >
        __TOPIC NAME__
      </Title>
      <Box
        style={{
          paddingBottom: `${bottom}%`,
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
        <Center>__GRAPH__</Center>
      </Box>
    </>
  );
}

export default InfoCard;
