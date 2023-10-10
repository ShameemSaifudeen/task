import { Box } from "@chakra-ui/react";
import GeneralBoxInfo from "../GeneralInfoBox/GeneralBoxInfo";
import TableBox from "../TableBox/TableBox";

const RightSection = () => {
  return (
    <Box width="70%">
      <GeneralBoxInfo />
      <Box margin="20px" />
      <TableBox />
    </Box>
  );
};

export default RightSection;
