import { Text, Title, Image, Flex, Tooltip, ActionIcon } from "@mantine/core";
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
        &emsp; &emsp;Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Text
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          fontFamily: "sans-serif",
        }}
      >
        &emsp; &emsp;Contrary to popular belief, Lorem Ipsum is not simply
        random text. It has roots in a piece of classical Latin literature from
        45 BC, making it over 2000 years old. Richard McClintock, a Latin
        professor at Hampden-Sydney College in Virginia, looked up one of the
        more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
        going through the cites of the word in classical literature, discovered
        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
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
