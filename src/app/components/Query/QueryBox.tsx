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
import { operators, tableColumnNames } from "./Table";
import { api } from "../../api/axios-api";

type whereClause = {
  field: string;
  operator: string;
  value: string;
  logic?: string;
};

const defaultWhereClause = {
  field: `${tableColumnNames[0]}`,
  operator: `${operators[0]}`,
  value: "",
  logic: "AND",
};

export default function QueryBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectFields, setSelectFields] = useState<string[]>([]);
  const [whereClauses, setWhereClauses] = useState<whereClause[]>([
    { ...defaultWhereClause },
  ]);

  const addWhereClause = () => {
    setWhereClauses([...whereClauses, { ...defaultWhereClause }]);
  };

  const removeWhereClause = (index: number) => {
    const updatedClauses = whereClauses.filter((_, i) => i !== index);
    setWhereClauses(updatedClauses);
  };

  const handleWhereChange = (index: number, key: string, value: string) => {
    const updatedClauses = [...whereClauses];
    updatedClauses[index][key as keyof (typeof whereClauses)[0]] = value;
    setWhereClauses(updatedClauses);
  };

  const submitQuery = ({ selectFields, whereClauses }: any) => {
    console.log({ selectFields, whereClauses });
    // api
    // .get("/query", { prompt: message })
    // .then(({ data }) => {
    // })
    // .catch((error) => {});
  };

  return (
    <Box mb="md">
      {!isOpen ? (
        <Button onClick={() => setIsOpen(true)}>Query</Button>
      ) : (
        <Box>
          <Group mb="sm">
            <Button onClick={() => setIsOpen(false)}>Close Query</Button>
            <Button onClick={() => submitQuery({ selectFields, whereClauses })}>
              Execute
            </Button>
          </Group>
          <Box mb="lg">
            <MultiSelect
              label="Select"
              placeholder="Pick columns. Leave empty or select all to view all columns"
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
                  data={operators}
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
                {index > 0 && (
                  <Select
                    placeholder="Logic"
                    data={["AND", "OR"]}
                    value={clause.logic}
                    onChange={(value) =>
                      handleWhereChange(index, "logic", value!)
                    }
                    style={{ width: 80 }}
                  />
                )}
                <Button
                  variant="outline"
                  onClick={addWhereClause}
                  size="compact-md"
                >
                  <IconPlus size={16} />
                </Button>
                <Button
                  variant="outline"
                  color="red"
                  onClick={() => removeWhereClause(index)}
                  size="compact-md"
                >
                  <IconMinus size={16} />
                </Button>
              </Group>
            ))}
          </Box>
          <Button mt={10} variant="light" onClick={addWhereClause}>
            Add new clause
          </Button>
        </Box>
      )}
    </Box>
  );
}
