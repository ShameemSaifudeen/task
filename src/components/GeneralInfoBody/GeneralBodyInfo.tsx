import { Box, Flex, Text } from '@chakra-ui/react'

const GeneralBodyInfo = () => {
  return (
    <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Box display="flex" flexDirection="column" padding="20px">
            <Text size="12px" color="#6B6B6B" marginBottom="10px">
              Machine Model
            </Text>
            <Text as="b" size="16px">
              Calisto
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" padding="20px">
            <Text size="12px" color="#6B6B6B" marginBottom="10px">
              Machine Name
            </Text>
            <Text as="b" size="16px">
              NC_MKCC_001
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" padding="20px">
            <Text size="12px" color="#6B6B6B" marginBottom="10px">
              Serial Number
            </Text>
            <Text as="b" size="16px">
              EV01563237675
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" padding="20px">
            <Text size="12px" color="#6B6B6B" marginBottom="10px">
              Category
            </Text>
            <Text as="b" size="16px">
              Snack
            </Text>
          </Box>
        </Flex>
      </Box>
  )
}

export default GeneralBodyInfo
