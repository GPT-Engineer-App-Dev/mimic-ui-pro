import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DataTable from "../components/DataTable";

const Index = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" display="flex" flexDirection="column">
        <Topbar />
        <DataTable />
      </Box>
    </Flex>
  );
};

export default Index;