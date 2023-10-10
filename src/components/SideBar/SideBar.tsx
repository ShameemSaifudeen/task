import { Box } from "@chakra-ui/react";
import SideBarLowerSection from "../SideBarLowerSection/SideBarLowerSection";
import SideBarUpperSection from "../SideBarUpperSection/SideBarUpperSection";

const SideBar = () => {
  return (
    <>
      <Box
        width="427px"
        borderRadius="xl"
        border="1.5px solid"
        borderColor="gray.200"
        boxShadow="md"
        padding="20px"
      >
        <SideBarUpperSection />
        <SideBarLowerSection />
      </Box>
    </>
  );
};

export default SideBar;
