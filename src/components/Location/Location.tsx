import { Button, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Divider, Box } from '@chakra-ui/react';
import { useState } from 'react';

const Location = () => {
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
          Location
        </Text>
        <Button colorScheme="blue" onClick={() => setIsOpen(true)}>Edit</Button>
      </Flex>
      <Divider my="2" borderColor="#AFB0B4" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Location</ModalHeader>
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
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Box display="flex" flexDirection="column" padding="20px">
            <Text size="12px" color="#6B6B6B" marginBottom="10px">
              Address Line 1
            </Text>
            <Text as="b" size="16px">
              404 Midsummer Blvd
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" padding="20px">
            <Text size="12px" color="#6B6B6B" marginBottom="10px">
              Line 2
            </Text>
            <Text as="b" size="16px">
              --
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" padding="20px"></Box>
          <Box display="flex" flexDirection="column" padding="20px"></Box>
        </Flex>
      </Box>
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Box display="flex" flexDirection="column" padding="20px">
            <Text size="12px" color="#6B6B6B" marginBottom="10px">
              State or Country
            </Text>
            <Text as="b" size="16px">
              Buckinghamshire
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" padding="20px">
            <Text size="12px" color="#6B6B6B" marginBottom="10px">
              Post code
            </Text>
            <Text as="b" size="16px">
              MK9 2EA
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" padding="20px">
            <Text size="12px" color="#6B6B6B" marginBottom="10px">
              City
            </Text>
            <Text as="b" size="16px">
              Milton Keynes
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" padding="20px">
            <Text size="12px" color="#6B6B6B" marginBottom="10px">
              Country
            </Text>
            <Text as="b" size="16px">
              UK
            </Text>
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="column" padding="20px">
          <Text size="12px" color="#6B6B6B" marginBottom="10px">
            Location Access
          </Text>
          <Text as="b" size="16px">
            The machine is located in an office environment, only accessible via
            ID Card. For access, please call Security on +4407312345678.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Location;
