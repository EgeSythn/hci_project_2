import { Text, Title } from "@mantine/core";
import { faker } from "@faker-js/faker";

function Conclusion() {
  return (
    <>
      <Title
        order={2}
        style={{
          paddingLeft: `2.5%`,
          paddingTop: `5%`,
          fontFamily: "sans-serif",
        }}
      >
        Final Remarks and Conclusion
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
          paddingBottom: "5%",
          paddingLeft: "5%",
          paddingRight: "5%",
          fontFamily: "sans-serif",
        }}
      >
        &emsp; &emsp;{faker.lorem.paragraphs()}
      </Text>
    </>
  );
}

export default Conclusion;
