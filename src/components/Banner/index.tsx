import { Flex, Image, Text, Box } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      as="section"
      maxWidth={1440}
      justify="space-around"
      align="center"
      mx="auto"
      px={["16px", "140px"]}
      bgImage="url('/images/Background.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box

      >
        <Text
          maxWidth={426}
          fontSize={["20px", "36px"]}
          color="gray.50"
          fontWeight="500"
          mt="80px"
        >
          5 Continentes,
          infinitas possibilidades.
        </Text>
        <Text
          fontSize={["14", "20"]}
          maxWidth={524}
          mt="20px"
          mb={["28px", "70px"]}
          color="gray.100"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Image
        src="/images/Airplane.svg"
        alt="worldtrip - airplane banner"
        display={["none", "flex"]}
        transform="rotate(3deg)"
        position="relative"
        top="4"
        mt="76px"
        width={418}
      />
    </Flex>
  )
}