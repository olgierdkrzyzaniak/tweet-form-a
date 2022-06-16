import React from "react";
import TweetEmbed from "react-tweet-embed";

import { Box, VStack, Heading } from "@chakra-ui/react";

const tweets = [
  ,
  "1536044974294323200",
  "1537052795442020353",
  "1535584269778800641",
  "1536284139586039808",
  "1536738094581522432",
  "1536230547231481857",
  "1536457633556725760",
  "1535871917504221185",
  "1252970087469981699",
  "1534877992740085760"
];

type TweetStepProps = {
  handleNextStep: (num: number) => void;
  tweetNumber: number;
};

const TweetStep = ({ handleNextStep, tweetNumber }: TweetStepProps) => {
  console.log(tweets[tweetNumber]);
  console.log(tweetNumber);
  return (
    <Box
      borderWidth="2px"
      w={{ base: "80vw", sm: "70vw", md: "50vw", lg: "40vw", xl: "30vw" }}
      borderRadius="lg"
      bg="white"
      color="black"
    >
      <VStack>
        <Heading mt="5">Tweet number: {tweetNumber}/10</Heading>
        <TweetEmbed
          tweetId={`${tweets[tweetNumber]}`}
          placeholder="processing"
        />
      </VStack>
    </Box>
  );
};

export default TweetStep;
