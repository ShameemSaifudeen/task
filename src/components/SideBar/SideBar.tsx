import { Box } from "@chakra-ui/react";
import SideBarLowerSection from "../SideBarLowerSection/SideBarLowerSection";
import SideBarUpperSection from "../SideBarUpperSection/SideBarUpperSection";

const SideBar = () => {
  return (
    <>
      <Box
        width="330px"
        borderRadius="xl"
        border="1.5px solid"
        borderColor="gray.200"
        boxShadow="md"
        padding="20px"
        height="954px"
      >
        <SideBarUpperSection />
        <SideBarLowerSection />
      </Box>
    </>
  );
};

export default SideBar;
