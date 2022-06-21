import React from "react";
import { Box, VStack, Text, Button, Heading } from "@chakra-ui/react";

type StepProps = {
  handleNextStep: (num: number) => void;
  setStart: (date: Date) => void;
};

const InitialStep = ({ handleNextStep, setStart }: StepProps) => {
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
        <Heading>Cześć!</Heading>

        <Text pb="5">
          Zapraszam do wzięcia udziału w badaniu. Twoim zadaniem będzie ocena
          czy kolejne posty są obraźliwe, szkodliwe lub czy mogłyby sprawić
          komuś przykrość. Dodatkowo możesz zawrzeć krótki komentarz dlaczego
          uważasz post za obraźliwy.
        </Text>
        <Button
          onClick={() => {
            handleNextStep(-21);
            const date = new Date();
            setStart(date);
          }}
          colorScheme="blue"
          variant="solid"
        >
          Rozpocznij
        </Button>
      </VStack>
    </Box>
  );
};

export default InitialStep;
