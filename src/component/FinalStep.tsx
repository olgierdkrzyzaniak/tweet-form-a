import React from "react";
import { Box, VStack, Text, Button, Heading } from "@chakra-ui/react";

type StepProps = {
  handleNextStep: (num: number) => void;
};

const CommentStep = ({ handleNextStep }: StepProps) => {
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
          onClick={() => handleNextStep(1)}
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
