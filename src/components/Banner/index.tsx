import { Flex, Image, Text, Box } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      as="section"
      maxWidth={1440}
      justify="space-around"
      align="center"
      mx="auto"
      px="140"
      bgImage="url('/images/Background.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box
         
      >
        <Text
          maxWidth={426}
          fontSize={36}
          color="gray.50"
          fontWeight="500"
          mt="80px"
        >
          5 Continentes,
          infinitas possibilidades.
        </Text>
        <Text
          fontSize={20}
          maxWidth={524}
          mt="20px"
          mb="70px"
          color="gray.100"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Image
        src="/images/Airplane.svg"
        alt="worldtrip - airplane banner"
        transform="rotate(3deg)"
        position="relative"
        top="4"
        mt="76px"
        width={418}
      />
    </Flex>
  )
}