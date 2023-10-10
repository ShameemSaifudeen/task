import { Box, Divider, Text } from "@chakra-ui/react";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";
import GeneralBodyInfo from "../GeneralInfoBody/GeneralBodyInfo";
import Location from "../Location/Location";

const GeneralBoxInfo = () => {
  return (
    <Box
      width="100%"
      borderRadius="xl"
      border="1.5px solid"
      borderColor="gray.200"
      boxShadow="md"
      padding="20px"
      marginLeft="20px"
      //   height="70%"
    >
      <Text
        fontSize="24px"
        fontWeight="600"
        lineHeight="26px"
        letterSpacing="0em"
        textAlign="left"
        color="#0063FF"
      >
        General Information
      </Text>
      <Divider my="2" borderColor="#AFB0B4" />
      <GeneralBodyInfo />
      <Box margin="20px" />
      <Location />
      <Box margin="20px" />
      <AdditionalInfo />
    </Box>
  );
};

export default GeneralBoxInfo;
