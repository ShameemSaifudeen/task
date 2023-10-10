import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import TableComponent from "../TableComponent/TableComponent";

const TableBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <Box
      borderRadius="xl"
      border="1.5px solid"
      borderColor="gray.200"
      boxShadow="md"
      padding="20px"
      marginLeft="20px"
      width="100%"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text
          fontFamily="Work Sans"
          fontSize="24px"
          fontWeight="600"
          lineHeight="26px"
          letterSpacing="0em"
          textAlign="left"
          color="#0063FF"
        >
          Components
        </Text>
        <Button
          fontFamily="Work Sans"
          fontSize="16px"
          fontWeight="500"
          lineHeight="21px"
          letterSpacing="0em"
          textAlign="center"
          colorScheme="blue"
          backgroundColor="#0063FF"
          height="40px"
          onClick={() => setIsOpen(true)}
        >
          Add Component
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Component</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <TableComponent />
    </Box>
  );
};

export default TableBox;
