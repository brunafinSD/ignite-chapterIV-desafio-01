import { Box, Flex, Image, Link, Text, textDecoration } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export function Slide() {
  return (
    <Flex
      as="section"
      direction="column"
      maxWidth={1440}
      mx="auto"
      mt="80px"
      mb="40px"
      px="140"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Text
        fontSize={36}
        color="gray.300"
        fontWeight="500"
        mt="132px"
        textAlign="center"
        maxWidth={840}
        mx="auto"
      >
        Vamos nessa?
      </Text>
      <Text fontSize={36}
        color="gray.300"
        fontWeight="500"
        mb="52px"
        textAlign="center"
        maxWidth={840}
        mx="auto"> Então escolha seu continente</Text>
      <Box>
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }} pagination={{
          "clickable": true
        }} navigation={true}>
          <SwiperSlide>
            <Box
              as="section"
              maxWidth={1440}
              height={450}
              bgImage="url('/images/continent-europa.png')"
              bgPosition="center"
              bgRepeat="no-repeat"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Link href='/europa'>
                <Text
                  fontSize={48}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  EUROPA
                </Text>
                <Text
                  fontSize={24}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  O continente mais antigo
                </Text></Link>

            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="section"
              maxWidth={1440}
              height={450}
              bgImage="url('/images/america-do-sul.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Link href='/america-do-sul' >
                <Text
                  fontSize={48}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  AMÉRICA DO SUL
                </Text>
                <Text
                  fontSize={24}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  Visite as belezas do RJ
                </Text>
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="section"
              maxWidth={1440}
              height={450}
              bgImage="url('/images/america-do-norte.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Link href='/america-do-norte'>
                <Text
                  fontSize={48}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  AMÉRICA DO NORTE
                </Text>
                <Text
                  fontSize={24}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  Se divirta em Las Vegas
                </Text>
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="section"
              maxWidth={1440}
              height={450}
              bgImage="url('/images/asia.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Link href='/asia' >
                <Text
                  fontSize={48}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  ÁSIA
                </Text>
                <Text
                  fontSize={24}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  Que tal férias em Dubai?
                </Text>
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="section"
              maxWidth={1440}
              height={450}
              bgImage="url('/images/africa.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Link href='/africa' >
                <Text
                  fontSize={48}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  ÁFRICA
                </Text>
                <Text
                  fontSize={24}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  Explore a fauna da Savana
                </Text>
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="section"
              maxWidth={1440}
              height={450}
              bgImage="url('/images/oceania.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Link href='/oceania' >
                <Text
                  fontSize={48}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  OCEANIA
                </Text>
                <Text
                  fontSize={24}
                  color="gray.50"
                  fontWeight="500"
                  textAlign="center"
                >
                  Formada por 20 mil ilhas
                </Text>
              </Link>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>

    </Flex>
  )
}