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
        &emsp; &emsp;Inequality is a reality that is often recognized, however
        not closely inspected and analayzed. The facets of life that get
        affected by the constant inequalities that multiple people face on a
        daily basis is an important area to study, as it can lead to a better
        understanding of the problems of our global and local socities. Cleverly
        used, statistics can help us identify were inequalities happen, and who
        gets affected the worse. Such analysis efforts by social scientists are
        significant in addressing the biases present in our societies and
        political systems. In that way, data is an important tool for humanity
        to understand its mistakes and better itself.
      </Text>
      <Text
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          fontFamily: "sans-serif",
        }}
      >
        &emsp; &emsp;Among common injustices in the world, wealth inequality is
        perhaps the most ubiquitous and recognized type of inequality. However,
        wealth inequality does not have an isolated affect to our lifes, but
        rather dictates our access to essential services, one such being health.
        Wealth is a significant factor in our modern day world, where human
        rights are sometimes only accessible to the wealthy. In addition, wealth
        inequality itself is rooted in many different factors, with perhaps one
        of the most significant factors being racial inequality.
      </Text>
      <Text
        style={{
          paddingTop: "2.5%",
          paddingLeft: "5%",
          paddingRight: "5%",
          fontFamily: "sans-serif",
        }}
      >
        &emsp; &emsp;The analysis we provide with this project aims to provide a
        glimpse of how these different factors interact with each other and
        negatively impact the lives of many. Despite including statistics about
        global inequality, our analysis dives in more to inequality in the
        United States, where such inequalities are often more prevalent.
        Identifying systematic problems and how they lead to inequality will
        eventually provide the necessary information and resources to make
        society better.
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
            target="_blank"
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
            target="_blank"
          >
            <IconBrandGithub size={30} />
          </ActionIcon>
        </Tooltip>
      </Flex>
    </>
  );
}

export default Introduction;
