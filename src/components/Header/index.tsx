import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      maxWidth={1440}
      h="100"
      justify="center"
      align="center"
      m="auto">
      <Image
        src="/images/Logo.svg"
        alt="worldtrip"
      />
    </Flex>
  )
}