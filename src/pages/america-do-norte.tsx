import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { data } from "../api";

export default function AmericaDoNorte() {
  const [cidades, setCidades] = useState([]);
  useEffect(() => {
    const dados = data();
    const [america_do_norte] = dados.map((item) => {
      if (item.continente === 'america_do_norte') {
        return item.cidades;
      }
    }).filter((x) => x !== undefined);
    setCidades(america_do_norte);
  }, []);

  return (
    <>
      <Header />
      <Flex
        display="flex"
        direction="column"
        width={["400px", "1440px"]}
        mx="auto"
      >
        <Box
          bgImage="url('/images/bg-america-do-norte.jpg')"
          bgRepeat="no-repeat"
          width="100%"
          height={[150, 500]}
          mx="auto"
          mb={["0", "80px"]}
          display="flex"
          justifyContent={["center", "flex-start"]}
          alignItems={["center", "end"]}
          px={[0, 140]}
          pb={[0, 16]}
        >
          <Text
            fontSize={[28, 48]}
            color="#ffffff"
            fontWeight="500"
          >
            América do Norte
          </Text>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          px={["0", "140px"]}
          m={["16px", "0"]}
          flexWrap={["wrap", "nowrap"]}
        >
          <Text
            fontSize={[14, 24]}
            color="gray.300"
            fontWeight="400"
            width={600}
            textAlign="justify"
          >
            A América do Norte é um subcontinente que compreende a porção setentrional do continente americano.
          </Text>
          <Box
            display="flex"
            alignItems={"center"}
            mt={[16, 0]}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems={["flex-start", "center"]}
            >
              <Text
                fontSize={[24, 48]}
                color="yellow.500"
                fontWeight="600"
                textAlign="justify"
              >
                3
              </Text>
              <Text
                fontSize={[18, 24]}
                color="gray.300"
                fontWeight="600"
              >
                países
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={["flex-start", "center"]}
              ml="42px"
            >
              <Text
                fontSize={[24, 48]}
                color="yellow.500"
                fontWeight="600"
                textAlign="justify"
              >
                256
              </Text>
              <Text
                fontSize={[18, 24]}
                color="gray.300"
                fontWeight="600"
              >
                línguas
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={["flex-start", "center"]}
              ml="42px"
            >
              <Text
                fontSize={[24, 48]}
                color="yellow.500"
                fontWeight="600"
                textAlign="justify"
              >
                12
              </Text>
              <Box>
                <Text
                  fontSize={[18, 24]}
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
                    <InfoOutlineIcon color="gray.200" mx={["4px", "8px"]} />
                  </Tooltip>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Text
          fontSize={[24, 36]}
          color="gray.300"
          fontWeight="500"
          px={["16px", "140px"]}
          mt={["32px", "80px"]}
        >
          cidades +100
        </Text>
        <Flex
          display="flex"
          flexWrap="wrap"
          px={["0", "140px"]}
          mt={["20px", "40px"]}
          mb={["0", "35px"]}
          justifyContent={["center", "space-between"]}
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
                        alt={item.cidade}
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