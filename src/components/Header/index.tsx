import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, Image, Link } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

export function Header() {
  const router = useRouter();

  return (
    <Flex
      as="header"
      maxWidth={1440}
      h="100"
      justify="center"
      align="center"
      m="auto">
      {router.asPath !== '/' && (
        <Link href='/' position="absolute" left={140}>
          <ChevronLeftIcon fontSize={30} />
        </Link>
      )}
      <Link href='/'>
        <Image
          src="/images/Logo.svg"
          alt="worldtrip"
        />
      </Link>
    </Flex>
  )
}