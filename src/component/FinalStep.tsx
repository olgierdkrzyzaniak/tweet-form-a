import React, { useState } from "react";
import { Box, VStack, Text, Button, Heading } from "@chakra-ui/react";

type StepProps = {
  handleNextStep: (num: number) => void;
  start: Date;
  clicks: number;
  opinionRate: number[];
};

const CommentStep = ({
  handleNextStep,
  start,
  clicks,
  opinionRate
}: StepProps) => {
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
            handleNextStep(1);
            const end = new Date();
            const data = {
              Wersja: 1,
              Start: start.toLocaleString("pl-PL"),
              Koniec: end.toLocaleString("pl-PL"),
              "Czas trwania": end - start,
              Kliknięcia: clicks,
              "Dodane opinie": opinionRate[1] / opinionRate[0]
            };
            console.log(data);
          }}
          colorScheme="blue"
          variant="solid"
          w="20"
        >
          Zakończ
        </Button>
      </VStack>
    </Box>
  );
};

export default CommentStep;
