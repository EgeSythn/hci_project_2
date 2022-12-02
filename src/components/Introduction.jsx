import { Text, Title, Image, Flex, Tooltip, ActionIcon } from "@mantine/core";
import { faker } from "@faker-js/faker";
import { IconBrandGithub } from "@tabler/icons";
import inequalityLogo from "../assets/inequality_logo.png";

function Introduction() {
  return (
    <>
      <Title
        order={2}
        style={{
          paddingLeft: `2.5%`,
          paddingTop: `7.5%`,
          fontFamily: "sans-serif",
        }}
      >
        What is this Project About ?
      </Title>
      <hr style={{ width: "95%" }} />
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
      <Flex
        gap="xl"
        direction="row"
        align="center"
        justify="center"
        style={{ paddingTop: `5%` }}
      >
        <Tooltip label="Global Inequality">
          <Image
            width={200}
            height={44}
            radius="md"
            src={inequalityLogo}
            alt="inequality.org logo"
            component="a"
            href="https://inequality.org/facts/global-inequality/#global-wealth-inequality"
          />
        </Tooltip>
        <Tooltip label="GitHub Repository">
          <ActionIcon
            color="dark"
            size="xl"
            radius="md"
            variant="filled"
            component="a"
            href="https://github.com/EgeSythn/hci_project_2"
          >
            <IconBrandGithub size={30} />
          </ActionIcon>
        </Tooltip>
      </Flex>
    </>
  );
}

export default Introduction;
