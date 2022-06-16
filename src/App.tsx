import React, { useState } from "react";
import TweetStep from "./component/TweetStep";
import CommentStep from "./component/CommentStep";
import FinalStep from "./component/FinalStep";
import InitialStep from "./component/InitialStep";
import TweetToast from "./component/TweetToast";
import { VStack, Stack, Button, Text } from "@chakra-ui/react";

export default function Example() {
  const [currentStep, setCurrentStep] = useState(21);
  const [skipStep, setSkipStep] = useState(true);

  const handleNextStep = (num: number) => {
    setCurrentStep(currentStep + num);
  };
  const steps = [
    <TweetStep
      handleNextStep={handleNextStep}
      tweetNumber={Math.floor(currentStep / 2) + 1}
    />,
    <CommentStep
      handleNextStep={handleNextStep}
      tweetNumber={Math.floor(currentStep / 2) + 1}
      setSkipStep={setSkipStep}
    />
  ];
  const background = [
    <FinalStep handleNextStep={handleNextStep} />,
    <InitialStep handleNextStep={handleNextStep} />
  ];
  return (
    <VStack>
      <VStack mt="10">
        {currentStep / 2 < 10
          ? steps[currentStep % 2]
          : background[currentStep - 20]}
      </VStack>
      {currentStep / 2 < 10 && currentStep % 2 === 0 ? (
        <VStack>
          <Text>You perceive this post as harmful?</Text>

          <Stack direction="row" spacing={4} align="center" p="5">
            <Button
              onClick={() => handleNextStep(2)}
              colorScheme="green"
              variant="solid"
              w="20"
            >
              Good
            </Button>
            {skipStep ? (
              <TweetToast
                handleNextStep={handleNextStep}
                setSkipStep={setSkipStep}
              />
            ) : (
              <Button
                onClick={() => {
                  handleNextStep(1);
                }}
                colorScheme="red"
                variant="solid"
                w="20"
              >
                Bad
              </Button>
            )}
          </Stack>
        </VStack>
      ) : (
        ""
      )}
    </VStack>
  );
}
