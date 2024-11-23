import { Text } from "@mantine/core";

type TooltipContentT = {
  value: string;
};

export function TooltipKey({ value }: TooltipContentT) {
  return (
    <Text span fs="italic">
      {value}:
    </Text>
  );
}

export function TooltipValue({ value }: TooltipContentT) {
  return (
    <Text span fw={500}>
      {value}
    </Text>
  );
}
