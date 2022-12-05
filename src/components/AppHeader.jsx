import {
  BackgroundImage,
  Header,
  Title,
  Center,
  useMantineTheme,
} from "@mantine/core";
import headerBackground from "../assets/headerbackground.png";

export function AppHeader() {
  const theme = useMantineTheme();
  return (
    <Header
      style={{
        width: "98%",
        marginLeft: "1%",
        marginRight: "1%",
        marginTop: "1%",
        backgroundColor: `${theme.colors.gray[0]}`,
      }}
    >
      <BackgroundImage src={headerBackground} radius="md">
        <Center>
          <Title
            order={1}
            style={{
              justifyContent: "center",
              alignContent: "center",
              paddingTop: "3%",
              paddingBottom: "3%",
              color: "white",
              fontFamily: "sans-serif",
            }}
            size={40}
          >
            Wealth, Health and Racial Inequality
          </Title>
        </Center>
      </BackgroundImage>
    </Header>
  );
}

export default AppHeader;
