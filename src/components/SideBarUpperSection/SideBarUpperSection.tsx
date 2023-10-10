import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const SideBarUpperSection = () => {
  return (
    <Box>
      <Box marginBottom="15px">
        <ChevronLeftIcon color="#0063FF" />
        <Button size="sx" variant="ghost" color="#0063FF">
          Hide SideBar
        </Button>
      </Box>
      <Box>
        <img src="/icons/product image.png" alt="" style={{ margin: "auto" }} />
      </Box>
      <Box marginTop="15px" marginBottom="7.5px">
        <Text
          as="b"
          color="#0063FF"
        >
          Cantaloupe
        </Text>
      </Box>
      <Heading as="h4" size="md">
        MKC_00001 - Snakky Max Vending Machine
      </Heading>
      <Box margin="7.5px 0px">
        <Text fontSize="16px">404 Midsummer Blvd, Milton Keynes MK9 2EA</Text>
      </Box>
    </Box>
  );
};

export default SideBarUpperSection;
