import { Box, Input, InputGroup, InputLeftElement, IconButton, HStack, Select } from "@chakra-ui/react";
import { SearchIcon, AddIcon, QuestionIcon, BellIcon } from "@chakra-ui/icons";
import { FaFilter, FaSort } from "react-icons/fa";

const TopBar = () => {
  return (
    <Box
      w="100%"
      h="60px"
      bg="white"
      p={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <HStack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input type="text" placeholder="Search" />
        </InputGroup>
        <Select placeholder="Category">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Select>
        <IconButton aria-label="Filter" icon={<FaFilter />} />
        <IconButton aria-label="Sort" icon={<FaSort />} />
      </HStack>
      <HStack spacing={4}>
        <IconButton aria-label="Add report" icon={<AddIcon />} />
        <IconButton aria-label="Help" icon={<QuestionIcon />} />
        <IconButton aria-label="Notifications" icon={<BellIcon />} />
        <IconButton aria-label="User profile" icon={<BellIcon />} />
      </HStack>
    </Box>
  );
};

export default TopBar;