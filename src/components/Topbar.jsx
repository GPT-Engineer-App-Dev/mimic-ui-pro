import { Box, Input, InputGroup, InputLeftElement, IconButton, Select, HStack, Spacer } from "@chakra-ui/react";
import { SearchIcon, AddIcon, QuestionIcon, BellIcon } from "@chakra-ui/icons";

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
        <IconButton icon={<SearchIcon />} aria-label="Filter" />
        <IconButton icon={<SearchIcon />} aria-label="Sort" />
        <IconButton icon={<AddIcon />} aria-label="Add report" />
      </HStack>
      <Spacer />
      <HStack spacing={4}>
        <IconButton icon={<QuestionIcon />} aria-label="Help" />
        <IconButton icon={<BellIcon />} aria-label="Notifications" />
        <IconButton icon={<SearchIcon />} aria-label="User profile" />
      </HStack>
    </Box>
  );
};

export default Topbar;