import { BackgroundImage, Header, Title, Center } from "@mantine/core";
import headerBackground from "../assets/headerbackground.png";

export function AppHeader() {
  return (
    <Header
      style={{
        width: "98%",
        marginLeft: "1%",
        marginRight: "1%",
        marginTop: "1%",
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
            }}
            size={40}
          >
            Wealth & Health Inequality
          </Title>
        </Center>
      </BackgroundImage>
    </Header>
  );
}

export default AppHeader;
