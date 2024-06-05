import { Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Button, HStack, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const DataTable = () => {
  const data = Array(10).fill({
    item: "Lorem dolore",
    value: "9,000",
    data1: "Data series",
    data2: "DD/MM/YY",
    status: "Status",
  });

  return (
    <Box w="100%" p={4}>
      <HStack spacing={4} mb={4}>
        <Button leftIcon={<EditIcon />}>Import</Button>
        <Button leftIcon={<DeleteIcon />}>Export</Button>
      </HStack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th><Checkbox /></Th>
            <Th>ITEM</Th>
            <Th>VALUE ($)</Th>
            <Th>DATA</Th>
            <Th>DATA</Th>
            <Th>STATUS</Th>
            <Th>ACTION</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td><Checkbox /></Td>
              <Td>{row.item}</Td>
              <Td>{row.value}</Td>
              <Td>{row.data1}</Td>
              <Td>{row.data2}</Td>
              <Td><Button size="sm">{row.status}</Button></Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton aria-label="Edit" icon={<EditIcon />} size="sm" />
                  <IconButton aria-label="Delete" icon={<DeleteIcon />} size="sm" />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        <Text>106 results</Text>
        <HStack spacing={2}>
          <Button size="sm">1</Button>
          <Button size="sm">2</Button>
          <Button size="sm">3</Button>
          <Button size="sm">4</Button>
          <Button size="sm">...</Button>
          <Button size="sm">10</Button>
          <Button size="sm">11</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default DataTable;