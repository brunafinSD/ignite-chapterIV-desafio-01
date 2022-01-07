import { Box, Flex, Image, Text } from '@chakra-ui/react';
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
      maxWidth={1440}
      justify="space-around"
      align="center"
      mx="auto"
      px="140"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt="80px"
    >
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
            <Text
              fontSize={48}
              color="gray.50"
              fontWeight="500"
            >
              EUROPA
            </Text>
            <Text
              fontSize={24}
              color="gray.50"
              fontWeight="500"
            >
              O continente mais antigo
            </Text>
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
            <Text
              fontSize={48}
              color="gray.50"
              fontWeight="500"
            >
              AMÉRICA DO SUL
            </Text>
            <Text
              fontSize={24}
              color="gray.50"
              fontWeight="500"
            >
              Visite as belezas do RJ
            </Text>
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
            <Text
              fontSize={48}
              color="gray.50"
              fontWeight="500"
            >
              AMÉRICA DO NORTE
            </Text>
            <Text
              fontSize={24}
              color="gray.50"
              fontWeight="500"
            >
              Se divirta em Las Vegas
            </Text>
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
            <Text
              fontSize={48}
              color="gray.50"
              fontWeight="500"
            >
              ÁSIA
            </Text>
            <Text
              fontSize={24}
              color="gray.50"
              fontWeight="500"
            >
              Que tal férias em Dubai?
            </Text>
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
            <Text
              fontSize={48}
              color="gray.50"
              fontWeight="500"
            >
              ÁFRICA
            </Text>
            <Text
              fontSize={24}
              color="gray.50"
              fontWeight="500"
            >
              Explore a fauna da Savana
            </Text>
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
            <Text
              fontSize={48}
              color="gray.50"
              fontWeight="500"
            >
              OCEANIA
            </Text>
            <Text
              fontSize={24}
              color="gray.50"
              fontWeight="500"
            >
              Formada por 20 mil ilhas
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}