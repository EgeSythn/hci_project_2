import { Box, Center, Text } from "@mantine/core";
import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";

const MapChart = (props) => {
  const { mapContent, setTooltipContent } = props;
  return (
    <>
      <Center style={{ paddingTop: "2.5%" }}>
        <Box
          data-tip=""
          style={{
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
          <ComposableMap>
            <ZoomableGroup>
              <Geographies geography="/features.json">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        setTooltipContent([
                          geo.properties.name,
                          geo.properties.insulin_prices,
                        ]);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        default: {
                          fill: `${geo.properties.default_color}`,
                          outline: "none",
                        },
                        hover: {
                          fill: "#566573",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
          <ReactTooltip multiline={true}>
            <Center>
              <Text>{mapContent[0]}</Text>
            </Center>
            <Center>
              <Text>{mapContent[1]}</Text>
            </Center>
          </ReactTooltip>
        </Box>
      </Center>
    </>
  );
};

export default memo(MapChart);
