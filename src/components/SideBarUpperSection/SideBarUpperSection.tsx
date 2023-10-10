import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";

const SideBarUpperSection = () => {
  return (
    <Box>
      <Box marginBottom="15px">
        <ChevronLeftIcon color="#0063FF" />
        <Button
          size="sx"
          variant="ghost"
          color="#0063FF"
          style={{
            fontFamily: "Work Sans",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "21px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#0063FF",
          }}
        >
          Hide SideBar
        </Button>
      </Box>
      <Box>
        <img src="/icons/product image.png" alt="" style={{ margin: "auto" }} />
      </Box>
      <Box marginTop="15px" marginBottom="7.5px">
        <Text
          fontFamily="Work Sans"
          fontSize="16px"
          fontWeight="600"
          lineHeight="21px"
          letterSpacing="0em"
          textAlign="left"
          color="#0063FF"
        >
          Cantaloupe
        </Text>
      </Box>
      <Text
        fontFamily="Work Sans"
        fontSize="24px"
        fontWeight="600"
        lineHeight="26px"
        letterSpacing="0em"
        textAlign="left"
      >
        MKC_00001 - Snakky Max Vending Machine
      </Text>
      <Box margin="7.5px 0px">
        <Text
          fontFamily="Work Sans"
          fontSize="16px"
          fontWeight="400"
          lineHeight="21px"
          letterSpacing="0em"
          textAlign="left"
        >
          404 Midsummer Blvd, Milton Keynes MK9 2EA
        </Text>
      </Box>
    </Box>
  );
};

export default SideBarUpperSection;
