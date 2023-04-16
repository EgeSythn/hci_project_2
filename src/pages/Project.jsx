import {
  AppShell,
  Text,
  Center,
  useMantineTheme,
  Header,
  Title,
  Flex,
} from "@mantine/core";
import DividerImage from "../components/DividerImage.jsx";
import Introduction from "../components/Introduction.jsx";
import PerAreaChart from "../charts/PerAreaChart.jsx";
import Conclusion from "../components/Conclusion.jsx";
import AppFooter from "../components/AppFooter.jsx";
import RegBarChart from "../charts/RegBarChart.jsx";
import AppHeader from "../components/AppHeader.jsx";
import InfoCard from "../components/InfoCard.jsx";
import RadBarChart from "../charts/RadBarChart";
import MapChart from "../charts/MapChart.jsx";
import { getData } from "../data/data.js";
import { useState } from "react";

function Project() {
  const theme = useMantineTheme();
  const [mapContent, setMapContent] = useState([]);
  const data_billionaire = getData().billionaire_country_wealth;
  const data_covid = getData().state_covid_deaths_by_race;
  const data_insurance = getData().insurance_coverage_by_race;
  const data_impact = getData().impact_by_race;

  return (
    <AppShell
      padding="md"
      styles={{
        main: {
          background: theme.colors.gray[0],
        },
      }}
      header={
        <Header
          height={100}
          p="xs"
          style={{
            backgroundColor: `${theme.colors.gray[0]}`,
          }}
          withBorder={false}
        >
          <AppHeader />
        </Header>
      }
      footer={<AppFooter />}
    >
      {/* Introduction */}
      <Introduction />

      {/* Data Visualizations */}
      <Title
        order={2}
        style={{
          paddingLeft: `2.5%`,
          paddingTop: "7.5%",
          fontFamily: "sans-serif",
        }}
      >
        Wealth & Health Inequality by Data
      </Title>
      <hr style={{ width: "95%" }} />

      {/* Section 1*/}
      <InfoCard
        helper={"render_with_box"}
        top={2.5}
        bottom={5}
        name={"Wealth Disparity & Hoarding"}
        graphTitle={"Country GDP's ($Billions)"}
        chart={<RadBarChart data={data_billionaire} />}
        introduction={
          "A significant problem in modern society is the overall" +
          " wealth gap that has been created. Recently, worrying trend of billionaires" +
          " engaging in self-fullfilling acquisitions has been visible, with the" +
          " acqusition of Twitter by Elon Musk. Such trends are troubling, when in todays" +
          " society, where many people do not have enough resources to afford basic amenities" +
          " let alone luxury or self-indulgence. Perhaps the best demonstration of the wealth" +
          " disparity rampant in global society, is the following chart."
        }
        discussion={
          "It is revealing to realize that the 10 richest people in the world" +
          " can have more wealth than entire countries. A shocking comparison we can make" +
          " is with Brazil, which has a population of approximately 216 million peope." +
          " Seeing that 216 million people have the same collective wealth as 10 top billionaires" +
          " is a disturbing reflection to the wealth disparity in the world, and how resources" +
          " have been hoarded by such billionaires to fullfill their own needs. Such" +
          " inequalities in wealth, although scary on their own, often lead to more severe" +
          " inequalities, especailly in health."
        }
      />
      <DividerImage alt="separator 2" size={50} />

      {/* Section 2*/}
      <InfoCard
        helper={"render_without_box"}
        top={0}
        bottom={5}
        name={"Health Accessibility"}
        graphTitle={"Insulin Prices Across the World ($USD)"}
        chart={undefined}
        introduction={
          "Access to health is not just a human right, but it is a necessity. Modern day" +
          " healthcare is advanced and has many resources to offer for common illnesses." +
          " However, wealth inequality and corporations taking advantage of vulnerable people" +
          " is a far more complicated aspect when in comes to accessibility of healthcare." +
          " This is apparently the case in the United States, which is the only first world" +
          " country to not offer any socialized healthcare services to its citizens." +
          " The following visualization of average insulin prices around the world is a glaring" +
          " examples of the failures of the healthcare system in the United States and the" +
          " inequalities US citizens face."
        }
      />
      <Flex
        style={{ paddingTop: "2.5%" }}
        mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Text>Low</Text>
        <Center
          sx={(theme) => ({
            height: 40,
            backgroundImage: theme.fn.gradient({
              from: "#0078C7",
              to: "#FF1900",
              deg: 45,
            }),
            width: "70%",
          })}
        />
        <Text>High</Text>
      </Flex>
      <MapChart mapContent={mapContent} setTooltipContent={setMapContent} />

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
          &emsp; &emsp;Insulin is a hormone produced by the pancreas that
          regulates the blood sugar entry to the body's cells for use as energy.
          In patients with Diabetes, especially those with <> </>
          <a
            href="https://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/diabetes-treatment/art-20044084#:~:text=If%20you%20have%20type%201,levels%20within%20the%20desired%20range."
            target="_blank"
          >
            Type 1 diabetes
          </a>
          , insulin therapy is a necessity to replace the insuling the body
          doesn't produce. The high prices of insulin prices in the US is an
          unfortunate consequence of the capital oriented system in which
          companies can profit off of the necessities in people's lives. In
          socialized healthcare systems, such as those in European nations,
          allow people to easily access insulin and other similar healthcare
          needs. The US, on the contrary, has seen many people suffer from the
          lack of such robust healthcare systems.
          <br />
          <br />
          &emsp; &emsp;Recently, <></>
          <a
            href="https://www.washingtonpost.com/technology/2022/11/14/twitter-fake-eli-lilly/"
            target="_blank"
          >
            Eli Lilly and Company,
          </a>
          an American pharmaceutical company, has come under fire when a fake
          Twitter account announced that "insulin is free now". Many people
          dependent on insulin, thinking the account was the actual company,
          rejoiced with the news, which were crushed when the account was
          revealed to be a 'troll' account. Such heartbreaking stories reveal
          the inadequate aspects of US healthcare, and the lack of health
          accessibility in the country.
        </Text>
      </Center>
      <DividerImage alt="separator 3" size={50} />

      {/* Section 3*/}
      <InfoCard
        helper={"render_with_box"}
        top={2.5}
        bottom={5}
        name={"Racial Disparity in Health Accessibility & Affordability"}
        graphTitle={"Insurance Among US Commuinites"}
        chart={<PerAreaChart data={data_insurance} data2={data_impact} />}
        introduction={
          "Another important aspect of US society that affects health accessibility and" +
          " affordability is the racial injustices that are all too common. Data on" +
          " insurance coverage of US citizen is extremely revealing in terms of the accessibility" +
          " gap when it comes to healthcare. "
        }
        discussion={
          "The data shows the racial disparity when it comes to health insurance, with" +
          " the Black, Hispanic, and American Indians and Alaska Natives communities being" +
          " far more likely to be either uninsured or insured through a public offering. We can see" +
          " that private insurance, for many of these communities are less likely to be acquired," +
          " which displays the overall racial inequality that US citizens face within healthcare." +
          " Such inequalities make health less accessible for such communities and make easily" +
          " avodiable, treatable or curable diseases far more deadly and impactful for them." +
          " A far more disturbing reality is that the same communities are more likely" +
          " to postpone or alltogether avoid getting medical care due to the associated costs, and" +
          " the lack of robust public insurance offerings."
        }
      />
      <DividerImage alt="separator 4" size={50} />

      {/* Section 4*/}
      <InfoCard
        helper={"render_with_box"}
        top={2.5}
        bottom={5}
        name={"Covid-19 Impact and Racial Health Inequality"}
        graphTitle={"Covid-19 Statistics by State"}
        chart={<RegBarChart data={data_covid} />}
        introduction={
          "We have also extracted data on all the states with respect to race" +
          " distribution. Though different states lie in diverse condition," +
          " generally speaking, we have observed that African Americans have a" +
          " higher rate of COVID-19 infection and a higher death rate. The number" +
          " of African Americans infected by COVID-19 is 64,605 (1981 cases per million)" +
          " with the number of deaths reaching 6181 (211 deaths per million), while the" +
          " number of Whites is 104,914 (658 cases per million) infected and 9806" +
          " (76 deaths per million) dead. The number of infected Latinos and Asians" +
          " per million, as defined in the reports, is 947 and 390, while the rate of mortality" +
          " (per million) is 82 and 52 respectively."
        }
        discussion={
          "The results of the death rate and infection rate highly correlated" +
          " with medical care cost and insurance from the section above. Hence" +
          " the reason of higher rate of COVID-19 infection and a higher death rate," +
          " to some extend, lies in lower medical care cost and insurance." +
          " In a nutshell, as the association between COVID-19-related fatality" +
          " and infection is different among different race and health status," +
          " it is important to further study the impact of COVID-19 prevention and" +
          " control policy in the at-risk population."
        }
      />

      {/* Conclusion & Remarks */}
      <Conclusion />
    </AppShell>
  );
}

export default Project;
