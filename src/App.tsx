import React, { useState } from "react";
import TweetStep from "./component/TweetStep";
import CommentStep from "./component/CommentStep";
import FinalStep from "./component/FinalStep";
import InitialStep from "./component/InitialStep";
import TweetToast from "./component/TweetToast";
import { VStack, Stack, Button, Text } from "@chakra-ui/react";

export default function Example() {
  const [currentStep, setCurrentStep] = useState(21);
  const [skipStep, setSkipStep] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [start, setStart] = useState(Date.now);
  const [opinionRate, setOpinionRate] = useState([1, 1]);

  window.addEventListener("click", function () {
    setClicks(clicks + 1);
  });

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
      opinionRate={opinionRate}
      setOpinionRate={setOpinionRate}
    />
  ];
  const background = [
    <FinalStep
      handleNextStep={handleNextStep}
      start={start}
      clicks={clicks}
      opinionRate={opinionRate}
    />,
    <InitialStep handleNextStep={handleNextStep} setStart={setStart} />
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
          <Text>Uważasz ten post za szkodliwy?</Text>

          <Stack direction="row" spacing={4} align="center" p="5">
            <Button
              onClick={() => handleNextStep(2)}
              colorScheme="green"
              variant="solid"
              w="20"
            >
              Dalej
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
                  setOpinionRate([opinionRate[0], opinionRate[1] + 1]);
                }}
                colorScheme="red"
                variant="solid"
                w="20"
              >
                Zgłoś
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
