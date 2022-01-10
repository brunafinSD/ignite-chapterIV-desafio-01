import { Flex, Image, Link } from '@chakra-ui/react';

export function Header() {
  return (
    <Link href='/' passHref>
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
    </Link>
  )
}