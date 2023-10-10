import { Box, Flex, Text } from "@chakra-ui/react";

const GeneralBodyInfo = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" margin="20px 0px 20px 0px">
        <Box display="flex" flexDirection="column" >
          <Text
            fontFamily="Work Sans"
            fontSize="12px"
            fontWeight="400"
            lineHeight="14px"
            letterSpacing="0em"
            textAlign="left"
            color="#6B6B6B"
            marginBottom="10px"
          >
            Machine Model
          </Text>
          <Text
            fontFamily="Work Sans"
            fontSize="16px"
            fontWeight="500"
            lineHeight="19px"
            letterSpacing="0em"
            textAlign="left"
          >
            Calisto
          </Text>
        </Box>
        <Box display="flex" flexDirection="column">
          <Text
            fontFamily="Work Sans"
            fontSize="12px"
            fontWeight="400"
            lineHeight="14px"
            letterSpacing="0em"
            textAlign="left"
            color="#6B6B6B"
            marginBottom="10px"
          >
            Machine Name
          </Text>
          <Text
            fontFamily="Work Sans"
            fontSize="16px"
            fontWeight="500"
            lineHeight="19px"
            letterSpacing="0em"
            textAlign="left"
          >
            NC_MKCC_001
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" >
          <Text
            fontFamily="Work Sans"
            fontSize="12px"
            fontWeight="400"
            lineHeight="14px"
            letterSpacing="0em"
            textAlign="left"
            color="#6B6B6B"
            marginBottom="10px"
          >
            Serial Number
          </Text>
          <Text
            fontFamily="Work Sans"
            fontSize="16px"
            fontWeight="500"
            lineHeight="19px"
            letterSpacing="0em"
            textAlign="left"
          >
            EV01563237675
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" >
          <Text
            fontFamily="Work Sans"
            fontSize="12px"
            fontWeight="400"
            lineHeight="14px"
            letterSpacing="0em"
            textAlign="left"
            color="#6B6B6B"
            marginBottom="10px"
          >
            Category
          </Text>
          <Text
            fontFamily="Work Sans"
            fontSize="16px"
            fontWeight="500"
            lineHeight="19px"
            letterSpacing="0em"
            textAlign="left"
          >
            Snack
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default GeneralBodyInfo;
