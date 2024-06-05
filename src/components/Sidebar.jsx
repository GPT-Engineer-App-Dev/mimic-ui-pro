import { Box, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      w="250px"
      h="100vh"
      bg="gray.100"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Box mb={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Project Name
        </Text>
        <Text fontSize="md" color="gray.500">
          Category
        </Text>
      </Box>
      <VStack align="flex-start" spacing={4}>
        <Text fontSize="lg">Call Tool</Text>
        <Text fontSize="lg">Invoice Tool</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;