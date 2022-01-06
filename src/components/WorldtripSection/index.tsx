import { Flex, Image, Text, Box } from '@chakra-ui/react';

export function WorldtripSection() {
  return (
    <Flex
      as="section"
      maxWidth={1440}
      justify="space-around"
      align="center"
      mx="auto"
      px="140"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt="80px"
    >
      <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      >
        <Image
          src="/images/cocktail.svg"
          alt="worldtrip - vida noturna"
          width={85}
        />
        <Text
          fontSize={24}
          color="gray.300"
          fontWeight="600"
          mt="24px"
        >
          vida noturna
        </Text>
      </Box>
      <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
      >
        <Image
          src="/images/surf.svg"
          alt="worldtrip - praia"
          width={85}
        />
        <Text
          fontSize={24}
          color="gray.300"
          fontWeight="600"
          mt="24px"
        >
          praia
        </Text>
      </Box>
      <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
      >
        <Image
          src="/images/building.svg"
          alt="worldtrip - moderno"
          width={85}
        />
        <Text
          fontSize={24}
          color="gray.300"
          fontWeight="600"
          mt="24px"
        >
          moderno
        </Text>
      </Box>
      <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
      >
        <Image
          src="/images/museum.svg"
          alt="worldtrip - classico"
          width={85}
        />
        <Text
          fontSize={24}
          color="gray.300"
          fontWeight="600"
          mt="24px"
        >
          classico
        </Text>
      </Box>
      <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
      >
        <Image
          src="/images/earth.svg"
          alt="worldtrip - e mais..."
          width={85}
        />
        <Text
          fontSize={24}
          color="gray.300"
          fontWeight="600"
          mt="24px"
        >
          e mais...
        </Text>
      </Box>
    </Flex>
  )
}