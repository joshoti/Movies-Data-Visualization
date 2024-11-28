import { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import {
  Button,
  MultiSelect,
  Select,
  TextInput,
  Group,
  Box,
  Text,
} from "@mantine/core";
import { tableColumnNames } from "../data/Table";

export default function QueryBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectFields, setSelectFields] = useState<string[]>([]);
  const [whereClauses, setWhereClauses] = useState<
    { field: string; operator: string; value: string }[]
  >([{ field: "", operator: "", value: "" }]);

  const resetForm = () => {
    setSelectFields([]);
    setWhereClauses([{ field: "", operator: "", value: "" }]);
  };

  const addWhereClause = () => {
    setWhereClauses([...whereClauses, { field: "", operator: "", value: "" }]);
  };

  const removeWhereClause = (index: number) => {
    if (whereClauses.length > 1) {
      const updatedClauses = whereClauses.filter((_, i) => i !== index);
      setWhereClauses(updatedClauses);
    }
  };

  const handleWhereChange = (index: number, key: string, value: string) => {
    const updatedClauses = [...whereClauses];
    updatedClauses[index][key as keyof (typeof whereClauses)[0]] = value;
    setWhereClauses(updatedClauses);
  };

  return (
    <Box mb="md">
      {!isOpen ? (
        <Button onClick={() => setIsOpen(true)}>Query</Button>
      ) : (
        <Box>
          <Group mb="sm">
            <Button onClick={() => setIsOpen(false)}>Close Query</Button>
            <Button onClick={() => console.log({ selectFields, whereClauses })}>
              Execute
            </Button>
          </Group>
          <Box mb="lg">
            <MultiSelect
              label="Select"
              placeholder="Pick columns"
              data={tableColumnNames}
              clearable
              searchable
              hidePickedOptions
              value={selectFields}
              onChange={(values) => setSelectFields(values as string[])}
            />
          </Box>
          <Box>
            <Text fw={500}>Where</Text>
            {whereClauses.map((clause, index) => (
              <Group key={index} mt="xs" gap="sm">
                <Select
                  placeholder="Field"
                  data={tableColumnNames}
                  value={clause.field}
                  onChange={(value) =>
                    handleWhereChange(index, "field", value!)
                  }
                />
                <Select
                  placeholder="Operator"
                  data={["=", "!=", ">", "<", "LIKE"]}
                  value={clause.operator}
                  onChange={(value) =>
                    handleWhereChange(index, "operator", value!)
                  }
                />
                <TextInput
                  placeholder="Value"
                  value={clause.value}
                  onChange={(event) =>
                    handleWhereChange(index, "value", event.currentTarget.value)
                  }
                />
                <Button
                  variant="outline"
                  onClick={addWhereClause}
                  size="compact-md"
                >
                  <IconPlus size={16} />
                </Button>
              </Group>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
