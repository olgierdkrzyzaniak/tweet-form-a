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
        <Heading>Cześć!</Heading>

        <Text pb="5">
          Zapraszam do wzięcia udziału w badaniu: coś tam coś tam coś tam coś
        </Text>
        <Button
          onClick={() => handleNextStep(-21)}
          colorScheme="blue"
          variant="solid"
        >
          Rozpocznij
        </Button>
      </VStack>
    </Box>
  );
};

export default CommentStep;
