import * as d3 from "d3-scale";
import * as d3c from "d3-scale-chromatic";

export function getColorScale(min: number, max: number, value: number) {
  return colorScaleUsingRecord(min, max, value);
}

const colorScale: Record<number, string> = {
  0: "rgb(238, 245, 252)",
  10: "rgb(224, 236, 248)",
  20: "rgb(210, 227, 243)",
  30: "rgb(172, 208, 231)",
  40: "rgb(134, 189, 220)",
  50: "rgb(89, 157, 203)",
  60: "rgb(45, 124, 186)",
  70: "rgb(33, 110, 176)",
  80: "rgb(21, 96, 167)",
  90: "rgb(14, 74, 139)",
  100: "rgb(8, 51, 111)",
};

const colorScaleUsingRecord = (min: number, max: number, value: number) => {
  const percent = Math.round(((value - min) / (max - min)) * 10);
  return colorScale[Math.min(percent * 10, 100)];
};

/**
 * The below are interpolation functions depending on which theme color preferred
 * 1. red theme - interpolateReds
 * 2. green theme - interpolateBuGn, interpolateGreens
 * 3. blue theme - interpolateBlues, interpolatePuBu
 * 4. purple theme - interpolateRdPu
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colorScaleusingD3 = (min: number, max: number, value: number) => {
  const colorFunction = d3
    .scaleSequential(d3c.interpolateBlues)
    .domain([min, max]);
  return colorFunction(value);
};

export const listColors = () => {
  return Object.values(colorScale);
};
