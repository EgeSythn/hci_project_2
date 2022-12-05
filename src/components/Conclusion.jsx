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
        &emsp; &emsp;Upon our analysis of data and the accompanying
        Visualizations, we can see how inequalities play a significant role in
        our lives, even considering recent events in human history such as the
        Covid-19 crisis. It is apparent that inequalities lead to other
        inequalities, with wealth inequality being a significant contributor to
        other injustices in our day to day lives. A prominent aspect of the
        systems in place, especially in the US, is the lack of robust
        infrastructure and regulations that prevent inequalities and help
        organize and provide services such as health to its citizens in an
        equitable fashion.
      </Text>
      <Text
        style={{
          paddingBottom: "5%",
          paddingLeft: "5%",
          paddingRight: "5%",
          fontFamily: "sans-serif",
        }}
      >
        &emsp; &emsp;Our current review shows how racial inequality especiaally,
        is an aspect of the unequal structure of US society. The United States,
        as being a country that is able to set social standards and be an
        example for other countries, has a long way to go in terms of creating a
        more just country. We hope that this project has been able to showcase
        some of the problems that even a diverse country such as the US can
        suffer, due to wealth and racial inequality. We further wish that this
        project can motivate the readers to further investigate and understand
        how such inequalities arise in our society, and what ways we can improve
        societal conditions and reform our culture.
      </Text>
    </>
  );
}

export default Conclusion;
