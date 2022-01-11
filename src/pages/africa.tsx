import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { data } from "../api";

export default function Africa() {
  const [cidades, setCidades] = useState([]);
  useEffect(() => {
    const dados = data();
    const [africa] = dados.map((item) => {
      if (item.continente === 'africa') {
        return item.cidades;
      }
    }).filter((x) => x !== undefined);
    setCidades(africa);
  }, []);

  console.log('cidades', cidades);
  return (
    <>
      <Header />
      <Flex
        display="flex"
        direction="column"
        maxWidth={1440}
        mx="auto"
      >
        <Box
          bgImage="url('/images/bg-africa.jpg')"
          bgRepeat="no-repeat"
          width={1440}
          height={500}
          mx="auto"
          mb="80px"
          display="flex"
          justifyContent="flex-start"
          alignItems="end"
          px={140}
          pb={16}
        >
          <Text
            fontSize={48}
            color="#ffffff"
            fontWeight="500"
          >
            Africa
          </Text>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          px="140px"
        >
          <Text
            fontSize={24}
            color="gray.300"
            fontWeight="400"
            width={600}
            textAlign="justify"
          >
            A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.
          </Text>
          <Box
            display="flex"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Text
                fontSize={48}
                color="yellow.500"
                fontWeight="600"
                textAlign="justify"
              >
                54
              </Text>
              <Text
                fontSize={24}
                color="gray.300"
                fontWeight="600"
              >
                países
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              ml="42px"
            >
              <Text
                fontSize={48}
                color="yellow.500"
                fontWeight="600"
                textAlign="justify"
              >
                +2000
              </Text>
              <Text
                fontSize={24}
                color="gray.300"
                fontWeight="600"
              >
                línguas
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              ml="42px"
            >
              <Text
                fontSize={48}
                color="yellow.500"
                fontWeight="600"
                textAlign="justify"
              >
                3
              </Text>
              <Box>
                <Text
                  fontSize={24}
                  color="gray.300"
                  fontWeight="600"
                >
                  cidades +100
                  <Tooltip
                    hasArrow
                    label='Cidades mais visitadas do mundo'
                    bg='gray.300'
                    color='#ffffff'
                  >
                    <InfoOutlineIcon color="gray.200" mx="8px" />
                  </Tooltip>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Text
          fontSize={36}
          color="gray.300"
          fontWeight="500"
          px="140px"
          mt="80px"
        >
          cidades +100
        </Text>
        <Flex
          display="flex"
          flexWrap="wrap"
          px="140px"
          mt="40px"
          mb="35px"
        >
          {cidades.length > 0 && (
            cidades.map((item) => (
              <div key={item.cidade}>
                <Box
                  width="256px"
                  height="270px"
                  bgImage={`url('${item.foto}')`}
                  bgPosition="bottom"
                  bgSize="cover"
                  display="flex"
                  alignItems="flex-end"
                  borderRadius="0 0 5px 5px"
                  mb="48px"
                  mr="20px"
                >
                  <Box
                    display="flex"
                    bgColor="#ffffff"
                    borderColor="yellow.500"
                    borderWidth={1}
                    borderRadius="0 0 5px 5px"
                    py="24px"
                    width="100%"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Box>
                      <Text
                        fontSize={20}
                        color="gray.300"
                        fontWeight="600"
                        mb="12px"
                      >
                        {item.cidade}
                      </Text>
                      <Text
                        fontSize={16}
                        color="gray.200"
                        fontWeight="500"
                      >
                        {item.pais}
                      </Text>
                    </Box>
                    <Box
                    >
                      <Image
                        src={item.bandeira}
                        alt="bandeira Reino Unido"
                        width="30px"
                      />
                    </Box>
                  </Box>
                </Box>
              </div>
            ))
          )}
        </Flex>
      </Flex>
    </>
  )
}