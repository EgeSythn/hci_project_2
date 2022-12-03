import { Center, Text } from "@mantine/core";
import React from "react";
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
        <div
          data-tip
          style={{
            width: "80%",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
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
        </div>
        {mapContent ? (
          <ReactTooltip multiline={true}>
            <Center>
              <Text>{mapContent[0]}</Text>
            </Center>
            <Center>
              <Text>{mapContent[1]}</Text>
            </Center>
          </ReactTooltip>
        ) : (
          <></>
        )}
      </Center>
    </>
  );
};

export default MapChart;
