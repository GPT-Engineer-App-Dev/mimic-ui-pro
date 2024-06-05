import { Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Button, HStack, Text, IconButton } from "@chakra-ui/react";
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
        <Button leftIcon={<EditIcon />} colorScheme="gray" variant="outline">
          Import
        </Button>
        <Button leftIcon={<DeleteIcon />} colorScheme="gray" variant="outline">
          Export
        </Button>
      </HStack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>
              <Checkbox />
            </Th>
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
              <Td>
                <Checkbox />
              </Td>
              <Td>{row.item}</Td>
              <Td>{row.value}</Td>
              <Td>{row.data1}</Td>
              <Td>{row.data2}</Td>
              <Td>
                <Button size="sm" variant="outline" colorScheme="gray">
                  {row.status}
                </Button>
              </Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton icon={<EditIcon />} aria-label="Edit" size="sm" variant="outline" colorScheme="gray" />
                  <IconButton icon={<DeleteIcon />} aria-label="Delete" size="sm" variant="outline" colorScheme="gray" />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        <Text>106 results</Text>
        <HStack spacing={2}>
          <Button size="sm" variant="outline" colorScheme="gray">1</Button>
          <Button size="sm" variant="outline" colorScheme="gray">2</Button>
          <Button size="sm" variant="outline" colorScheme="gray">3</Button>
          <Button size="sm" variant="outline" colorScheme="gray">4</Button>
          <Button size="sm" variant="outline" colorScheme="gray">...</Button>
          <Button size="sm" variant="outline" colorScheme="gray">10</Button>
          <Button size="sm" variant="outline" colorScheme="gray">11</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default DataTable;