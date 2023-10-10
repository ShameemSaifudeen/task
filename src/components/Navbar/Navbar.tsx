import { Avatar, Button, Heading, Flex, Box } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import SubNavbar from "../SubNavbar/SubNavbar";

const Navbar = () => {
  return (
    <>
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        paddingY="1rem"
        paddingX="3rem"
        boxShadow="md"
      >
        <Box>
          <img
            src="/icons/logo.jpg"
            alt="Logo"
            style={{ maxHeight: "50px", marginRight: "1rem" }}
          />
        </Box>

        <Box display="flex" alignItems="center">
          <img
            src="/icons/centerlogo.jpg"
            alt="Center Logo"
            style={{ maxHeight: "50px", marginRight: "1rem" }}
          />
          <Heading as="h4" size="md">
            cantaloupe
          </Heading>
        </Box>

        <Box display="flex" alignItems="center">
          <Avatar
            size="sm"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
          <Button colorScheme="teal" variant="ghost" marginRight="1rem">
            John Doe
          </Button>
          <SettingsIcon color="blue.500" boxSize={6} />
        </Box>
      </Flex>
      <SubNavbar />
    </>
  );
};

export default Navbar;
