const colorScale: Record<number, string> = {
  0: "rgb(255,0,0)",
  10: "rgb(255,128,0)",
  20: "rgb(255,255,0)",
  30: "rgb(128,255,0)",
  40: "rgb(0,255,0)",
  50: "rgb(0,255,128)",
  60: "rgb(0,255,255)",
  70: "rgb(0,128,255)",
  80: "rgb(0,0,255)",
  90: "rgb(128,0,255)",
  100: "rgb(255,0,255)",
};

export function getColorScale(min: number, max: number, value: number) {
  const percent = Math.round(((value - min) / (max - min)) * 10);
  return colorScale[percent * 10];
}
