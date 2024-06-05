import { Box, Input, InputGroup, InputLeftElement, IconButton, HStack, Select, Spacer, Button } from "@chakra-ui/react";
import { SearchIcon, AddIcon, QuestionIcon, BellIcon } from "@chakra-ui/icons";
import { FaFilter, FaSort } from "react-icons/fa";

const Topbar = () => {
  return (
    <Box
      w="100%"
      h="60px"
      bg="white"
      p={4}
      display="flex"
      alignItems="center"
      boxShadow="sm"
    >
      <InputGroup w="300px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Search" />
      </InputGroup>
      <Select placeholder="Category" w="150px" ml={4} />
      <HStack spacing={4} ml={4}>
        <IconButton icon={<FaFilter />} aria-label="Filter" />
        <IconButton icon={<FaSort />} aria-label="Sort" />
      </HStack>
      <Spacer />
      <HStack spacing={4}>
        <Button leftIcon={<AddIcon />} colorScheme="gray" variant="solid">
          Add report
        </Button>
        <IconButton icon={<QuestionIcon />} aria-label="Help" />
        <IconButton icon={<BellIcon />} aria-label="Notifications" />
        <IconButton icon={<AddIcon />} aria-label="User profile" />
      </HStack>
    </Box>
  );
};

export default Topbar;