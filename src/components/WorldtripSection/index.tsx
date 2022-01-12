import { Flex, Image, Text, Box } from '@chakra-ui/react';

export function WorldtripSection() {
  return (
    <Flex
      as="section"
      maxWidth={1440}
      justify="space-around"
      flexWrap={["wrap", "nowrap"]}
      align="center"
      mx="auto"
      px={["50px", "140"]}
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={["36px", "80px"]}
    >
      <Box
        display="flex"
        flexDirection={["row", "column"]}
        alignItems={["baseline", "center"]}
        mx={["8px", "0"]}
      >
        <Image
          src="/images/cocktail.svg"
          alt="worldtrip - vida noturna"
          width={85}
          display={["none", "flex"]}
        />
        <Image
          src="/images/marcador.png"
          alt="worldtrip - vida noturna"
          display={["flex", "none"]}
          mr="8px"
        />
        <Text
          fontSize={["18px", "24px"]}
          color="gray.300"
          fontWeight="600"
          mt="24px"
        >
          vida noturna
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection={["row", "column"]}
        alignItems={["baseline", "center"]}
        mx={["8px", "0"]}
      >
        <Image
          src="/images/surf.svg"
          alt="worldtrip - praia"
          width={85}
          display={["none", "flex"]}
        />
        <Image
          src="/images/marcador.png"
          alt="worldtrip - vida noturna"
          display={["flex", "none"]}
          mr="8px"
        />
        <Text
          fontSize={["18px", "24px"]}
          color="gray.300"
          fontWeight="600"
          mt="24px"
        >
          praia
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection={["row", "column"]}
        alignItems={["baseline", "center"]}
        mx={["8px", "0"]}
      >
        <Image
          src="/images/building.svg"
          alt="worldtrip - moderno"
          width={85}
          display={["none", "flex"]}
        />
        <Image
          src="/images/marcador.png"
          alt="worldtrip - vida noturna"
          display={["flex", "none"]}
          mr="8px"
        />
        <Text
          fontSize={["18px", "24px"]}
          color="gray.300"
          fontWeight="600"
          mt="24px"
        >
          moderno
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection={["row", "column"]}
        alignItems={["baseline", "center"]}
        mx={["8px", "0"]}
      >
        <Image
          src="/images/museum.svg"
          alt="worldtrip - classico"
          width={85}
          display={["none", "flex"]}
        />
        <Image
          src="/images/marcador.png"
          alt="worldtrip - vida noturna"
          display={["flex", "none"]}
          mr="8px"
        />
        <Text
          fontSize={["18px", "24px"]}
          color="gray.300"
          fontWeight="600"
          mt="24px"
        >
          classico
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection={["row", "column"]}
        alignItems={["baseline", "center"]}
        mx={["8px", "0"]}
      >
        <Image
          src="/images/earth.svg"
          alt="worldtrip - e mais..."
          width={85}
          display={["none", "flex"]}
        />
        <Image
          src="/images/marcador.png"
          alt="worldtrip - vida noturna"
          display={["flex", "none"]}
          mr="8px"
        />
        <Text
          fontSize={["18px", "24px"]}
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