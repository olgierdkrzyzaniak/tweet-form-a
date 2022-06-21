import React, { useState } from "react";
import { Box, VStack, Text, Button, Heading, Link } from "@chakra-ui/react";
import axios from "axios";

type StepProps = {
  start: Date;
  clicks: number;
  opinionRate: number[];
};

const FinalStep = ({ start, clicks, opinionRate }: StepProps) => {
  const [disable, setDisable] = useState(false);
  return (
    <Box
      borderWidth="2px"
      w={{ base: "80vw", sm: "70vw", md: "50vw", lg: "40vw", xl: "30vw" }}
      borderRadius="lg"
      bg="white"
      color="black"
      p="5"
    >
      <VStack align="center">
        <Heading>Dziękuję!</Heading>

        <Text pb="5">
          Dziękuję za udział w badaniu. Kliknij zakończ "Zakończ" aby wysłać
          wyniki.
        </Text>
        <Button
          onClick={() => {
            const end = new Date();
            const dane = {
              Wersja: 2,
              Start: start.toLocaleString("pl-PL"),
              Koniec: end.toLocaleString("pl-PL"),
              "Czas trwania": end - start,
              Kliknięcia: clicks,
              Zgłoszone: opinionRate[1],
              Komentarze: opinionRate[0]
            };
            axios
              .post("https://sheetdb.io/api/v1/926rldkzmr0fl", {
                data: dane
              })
              .then((response) => {
                console.log(response.data);
              });
            setDisable(true);
          }}
          colorScheme="blue"
          variant="solid"
          w="20"
          isDisabled={disable}
        >
          {disable ? "Wysłane" : "Zakończ"}
        </Button>
        <Text>
          Dodatkowo będę super wdzięczny jeśli zechcesz wypełnić krótki
          kwestionariusz na temat aplikacji.
        </Text>
        <Text>Wróć do dokumentu na google forms.</Text>
      </VStack>
    </Box>
  );
};

export default FinalStep;
