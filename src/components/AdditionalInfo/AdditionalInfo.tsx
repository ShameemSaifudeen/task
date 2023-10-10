import { Box, Button, Divider, Flex, Grid, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { useState } from "react";

const AdditionalInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Text
          fontSize="24px"
          fontWeight="600"
          lineHeight="26px"
          letterSpacing="0em"
          textAlign="left"
          color="#0063FF"
        >
          Additional Info
        </Text>
        <Button colorScheme="blue" onClick={() => setIsOpen(true)}>Edit</Button>
      </Flex>
      <Divider my="2" borderColor="#AFB0B4" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Box padding="20px">
          <Text fontSize="12px" color="#6B6B6B" marginBottom="10px">
            Installation Date
          </Text>
          <Text as="b" fontSize="16px">
            07/09/23
          </Text>
        </Box>
        <Box padding="20px">
          <Text fontSize="12px" color="#6B6B6B" marginBottom="10px">
            Site Segment
          </Text>
          <Text as="b" fontSize="16px">
            Public Space
          </Text>
        </Box>{" "}
        <Box padding="20px">
          <Text fontSize="12px" color="#6B6B6B" marginBottom="10px">
            Area Manager
          </Text>
          <Text as="b" fontSize="16px" color="#0063FF">
            Michael Thorn
          </Text>
        </Box>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box padding="20px">
          <Text fontSize="12px" color="#6B6B6B" marginBottom="10px">
            Machine Group
          </Text>
          <Text as="b" fontSize="16px">
            Milton Keynes Machines
          </Text>
        </Box>
        <Box padding="20px">
          <Text fontSize="12px" color="#6B6B6B" marginBottom="10px">
            Machine Labels
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Box backgroundColor="#0063FF40" borderRadius="25px">
              <Text align="center" fontSize="12px">
                {" "}
                South-East England
              </Text>
            </Box>
            <Box backgroundColor="#0063FF40" borderRadius="25px">
              <Text align="center" fontSize="12px">
                Milton Keynes Region
              </Text>
            </Box>
            <Box backgroundColor="#0063FF40" borderRadius="25px">
              <Text align="center" fontSize="12px">
                2022 Best Performers
              </Text>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default AdditionalInfo;
