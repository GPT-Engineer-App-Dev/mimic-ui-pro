import { Box, Container, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import DataTable from "../components/DataTable";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex>
        <Sidebar />
        <Box flex="1">
          <TopBar />
          <DataTable />
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;