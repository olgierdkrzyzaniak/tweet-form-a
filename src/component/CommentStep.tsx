import React, { useState } from "react";
import { Box, VStack, Textarea, Text, Button, Heading } from "@chakra-ui/react";

type TweetStepProps = {
  handleNextStep: (num: number) => void;
  tweetNumber: number;
  setSkipStep: (bool: boolean) => void;
  opinionRate: number[];
  setOpinionRate: (arr: number[]) => void;
};

const CommentStep = ({
  handleNextStep,
  tweetNumber,
  setSkipStep,
  opinionRate,
  setOpinionRate
}: TweetStepProps) => {
  const [opinion, setOpinion] = useState("");
  function handleTextarea(event: any) {
    setOpinion(event.target.value);
  }

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
        <Heading>Tweet number: {tweetNumber}/10</Heading>

        <Text pb="5">Tell me why?</Text>
        <Textarea
          placeholder="Here is a sample placeholder"
          onChange={handleTextarea}
          value={opinion}
        />
        <Button
          onClick={() => {
            handleNextStep(1);
            setSkipStep(!opinion);
            setOpinionRate([opinionRate[0] + opinion ? 1 : 0, opinionRate[1]]);
          }}
          colorScheme="blue"
          variant="solid"
          w="20"
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default CommentStep;
