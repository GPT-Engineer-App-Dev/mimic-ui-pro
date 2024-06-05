import { Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Button, HStack, Spacer, Text, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

const DataTable = () => {
  return (
    <Box w="100%" p={4}>
      <HStack mb={4}>
        <Button leftIcon={<ArrowUpIcon />} variant="outline">Import</Button>
        <Button leftIcon={<ArrowDownIcon />} variant="outline">Export</Button>
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
          {Array(10).fill("").map((_, index) => (
            <Tr key={index}>
              <Td><Checkbox /></Td>
              <Td>Lorem dolore</Td>
              <Td>9,000</Td>
              <Td>Data series</Td>
              <Td>DD/MM/YY</Td>
              <Td><Button size="sm" variant="outline">Status</Button></Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton icon={<EditIcon />} aria-label="Edit" size="sm" />
                  <IconButton icon={<DeleteIcon />} aria-label="Delete" size="sm" />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <HStack mt={4} justifyContent="space-between">
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
      </HStack>
    </Box>
  );
};

export default DataTable;