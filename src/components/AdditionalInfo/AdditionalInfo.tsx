import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
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

const AdditionalInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <>
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
          Additional Info
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
          Edit
        </Button>
      </Flex>
      <Divider my="2" borderColor="#AFB0B4" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Info</ModalHeader>
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
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Box paddingTop="20px">
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
            Installation Date
          </Text>
          <Text
            fontFamily="Work Sans"
            fontSize="16px"
            fontWeight="500"
            lineHeight="19px"
            letterSpacing="0em"
            textAlign="left"
          >
            07/09/23
          </Text>
        </Box>
        <Box paddingTop="20px">
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
            Site Segment
          </Text>
          <Text
            fontFamily="Work Sans"
            fontSize="16px"
            fontWeight="500"
            lineHeight="19px"
            letterSpacing="0em"
            textAlign="left"
          >
            Public Space
          </Text>
        </Box>{" "}
        <Box paddingTop="20px">
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
            Area Manager
          </Text>
          <Text
            fontFamily="Work Sans"
            fontSize="16px"
            fontWeight="500"
            lineHeight="19px"
            letterSpacing="0em"
            textAlign="left"
            color="#0063FF"
          >
            Michael Thorn
          </Text>
        </Box>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box paddingTop="20px">
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
            Machine Group
          </Text>
          <Text
            fontFamily="Work Sans"
            fontSize="16px"
            fontWeight="500"
            lineHeight="19px"
            letterSpacing="0em"
            textAlign="left"
            color="#0063FF"
          >
            Milton Keynes Machines
          </Text>
        </Box>
        <Box paddingTop="20px">
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
            Machine Labels
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Box
              backgroundColor="#0063FF40"
              borderRadius="20px"
              width="159px"
              height="18px"
            >
              <Text
                fontFamily="Work Sans"
                fontSize="12px"
                fontWeight="600"
                lineHeight="14px"
                letterSpacing="0em"
                textAlign="center"
                color="#003994"
              >
                {" "}
                South-East England
              </Text>
            </Box>
            <Box
              backgroundColor="#0063FF40"
              borderRadius="25px"
              width="159px"
              height="18px"
            >
              <Text
                fontFamily="Work Sans"
                fontSize="12px"
                fontWeight="600"
                lineHeight="14px"
                letterSpacing="0em"
                textAlign="center"
                color="#003994"
              >
                Milton Keynes Region
              </Text>
            </Box>
            <Box
              backgroundColor="#0063FF40"
              borderRadius="25px"
              width="159px"
              height="18px"
            >
              <Text
                fontFamily="Work Sans"
                fontSize="12px"
                fontWeight="600"
                lineHeight="14px"
                letterSpacing="0em"
                textAlign="center"
                color="#003994"
              >
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
