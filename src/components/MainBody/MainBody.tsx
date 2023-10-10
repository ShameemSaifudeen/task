import { Box, Text } from "@chakra-ui/react";
import RightSection from "../RightSection/RightSection";
import SideBar from "../SideBar/SideBar";
import "./MainBody.css";

const MainBody = () => {
  return (
    <div className="main__body">
      <Text
        fontFamily="Work Sans"
        fontSize="32px"
        fontWeight="600"
        lineHeight="38px"
        letterSpacing="0em"
        textAlign="left"
        color="#0063FF"
        marginBottom="24px"
      >
        Machine Details
      </Text>

      <Box display="flex">
        <SideBar />
        <RightSection />
      </Box>
    </div>
  );
};

export default MainBody;
